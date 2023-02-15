const SampleToken = artifacts.require('SampleToken')
const StakingToken = artifacts.require('StakingToken')
const truffleAssertions = require('truffle-assertions')

contract('StakingToken', (accounts) => {
  it('Should be possible to stake TOKs and unstake SATs', async () => {
    const sampleToken = await SampleToken.deployed()
    const stakingToken = await StakingToken.deployed()

    const initialBalanceTOKs = await sampleToken.balanceOf(accounts[0])
    const amountToStake = 1e4

    // ====== Staking ====== //
    const tx1 = await stakingToken.stake(amountToStake)

    truffleAssertions.eventEmitted(tx1, 'Transfer')

    const balanceSATs = await stakingToken.balanceOf(accounts[0])
    const balanceTOKs = await sampleToken.balanceOf(accounts[0])

    assert.equal(balanceSATs, amountToStake)
    assert.equal(balanceTOKs, initialBalanceTOKs - amountToStake)

    // ====== Unstaking ====== //
    const tx2 = await stakingToken.unstake(balanceSATs)

    truffleAssertions.eventEmitted(tx2, 'Transfer')

    const newBalanceSATs = await stakingToken.balanceOf(accounts[0])
    const newBalanceTOKs = await sampleToken.balanceOf(accounts[0])

    assert.equal(newBalanceSATs, 0)
    assert.equal(newBalanceTOKs, initialBalanceTOKs.toNumber())
  })
})
