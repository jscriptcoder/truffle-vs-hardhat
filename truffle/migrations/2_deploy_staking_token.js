const StakingToken = artifacts.require('StakingToken')
const SampleToken = artifacts.require('SampleToken')

module.exports = (deployer) => {
    deployer.deploy(StakingToken, 'Staking Token', 'SAT', SampleToken.address)
}