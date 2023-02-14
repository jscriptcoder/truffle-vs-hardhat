const StakingToken = artifacts.require('StakingToken')
const truffleAssertions = require('truffle-assertions')

contract('StakingToken', (accounts) => {
  it('Should be possible to stake TOKs', async () => {
    const stakingToken = await StakingToken.deployed()
    const tx = await stakingToken.stake(50)

    truffleAssertions.eventEmitted(tx, 'Transfer')

    const balance = await stakingToken.balanceOf(accounts[0])
    assert.equal(balance, 50)
  })
})
