const { expect } = require('chai')
const { ethers } = require('hardhat')

const deploy = require('../scripts/deploy')

describe('StakingToken', () => {
  it('Should be possible to stake TOKs and unstake SATs', async () => {
    const accounts = await ethers.getSigners()
    const { sampleToken, stakingToken } = await deploy()

    const initialBalanceTOKs = await sampleToken.balanceOf(accounts[0].address)
    const amountToStake = 1e4

    // ====== Staking ====== //
    const tx1 = await stakingToken.stake(amountToStake)

    await expect(tx1).to.emit(stakingToken, 'Transfer')

    const balanceSATs = await stakingToken.balanceOf(accounts[0].address)
    const balanceTOKs = await sampleToken.balanceOf(accounts[0].address)

    expect(balanceSATs).to.equal(amountToStake)
    expect(balanceTOKs).to.equal(initialBalanceTOKs - amountToStake)

    // ====== Unstaking ====== //
    const tx2 = await stakingToken.unstake(balanceSATs)

    await expect(tx2).to.emit(stakingToken, 'Transfer')

    const newBalanceSATs = await stakingToken.balanceOf(accounts[0].address)
    const newBalanceTOKs = await sampleToken.balanceOf(accounts[0].address)

    expect(newBalanceSATs).to.equal(0)
    expect(newBalanceTOKs).to.equal(initialBalanceTOKs)
  })
})
