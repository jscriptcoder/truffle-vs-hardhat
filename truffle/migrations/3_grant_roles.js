const SampleToken = artifacts.require('SampleToken')
const StakingToken = artifacts.require('StakingToken')

module.exports = async (deployer) => {
  const sampleToken = await SampleToken.deployed()

  const [MINTER_ROLE, BURNER_ROLE] = await Promise.all([
    sampleToken.MINTER_ROLE(),
    sampleToken.BURNER_ROLE(),
  ])

  sampleToken.grantRole(MINTER_ROLE, StakingToken.address)
  sampleToken.grantRole(BURNER_ROLE, StakingToken.address)
}
