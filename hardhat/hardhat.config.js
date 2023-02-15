require('@nomicfoundation/hardhat-toolbox')

require('dotenv').config({ path: '../.env' })
const { MNEMONIC, PROJECT_URL } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    ganache: {
      chainId: 1337,
      url: 'http://127.0.0.1:7545',
    },
    goerli: {
      url: PROJECT_URL,
      accounts: { mnemonic: MNEMONIC },
    },
  },
}
