const { expect } = require('chai')
const { ethers } = require('hardhat')

const deploy = require('../scripts/deploy')

describe('StakingToken', () => {
  it('Should be possible to stake TOKs', async () => {
    const accounts = await ethers.getSigners()
    const { stakingToken } = await deploy()

    const tx = await stakingToken.stake(50)

    await expect(tx).to.emit(stakingToken, 'Transfer')

    const balance = await stakingToken.balanceOf(accounts[0].address)
    expect(balance, 50).to.equal(50)
  })
})
