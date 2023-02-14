const SampleToken = artifacts.require('SampleToken')

module.exports = (deployer) => {
  deployer.deploy(SampleToken, 'Sample Token', 'TOK', 1e6)
}
