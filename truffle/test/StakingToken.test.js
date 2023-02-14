const StakingToken = artifacts.require('StakingToken')
const truffleAssertions = require('truffle-assertions')

contract('StakingToken', (accounts) => {
    it('is possible to stake TOKs', async () => {
        const stakingToken = await StakingToken.deployed()
        const result = await stakingToken.stake(50)

        truffleAssertions.eventEmitted(result, 'Transfer')

        const balance = await stakingToken.balanceOf(accounts[0])
        assert.equal(balance, 50)
    })
})