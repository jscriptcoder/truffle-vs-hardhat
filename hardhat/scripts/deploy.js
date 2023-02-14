const { ethers } = require("hardhat")

async function deploy() {
  const SampleToken = await ethers.getContractFactory("SampleToken")
  const StakingToken = await ethers.getContractFactory("StakingToken")

  console.log('\nDeploying SampleToken...')
  const sampleToken = await SampleToken.deploy('Sample Token', 'TOK', 1e6)
  console.log('SampleToken deployed on address:', sampleToken.address)
  
  console.log('\nDeploying StakingToken...')
  const stakingToken = await StakingToken.deploy('Staking Token', 'SAT', sampleToken.address)
  console.log('StakingToken deployed on address:', stakingToken.address)

  console.log('\nGranting permissions...')
  const [ MINTER_ROLE, BURNER_ROLE ] = await Promise.all([
    sampleToken.MINTER_ROLE(),
    sampleToken.BURNER_ROLE(),
  ])

  await sampleToken.grantRole(MINTER_ROLE, stakingToken.address)
  await sampleToken.grantRole(BURNER_ROLE, stakingToken.address)
  console.log('Permissions granted')

  return {
    sampleToken,
    stakingToken,
  }
}

module.exports = deploy