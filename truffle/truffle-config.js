require('dotenv').config({ path: '../.env' })
const { MNEMONIC, PROJECT_URL } = process.env

const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: 5777,
    },
    goerli: {
      provider: () => new HDWalletProvider(MNEMONIC, PROJECT_URL),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.18',
    },
  },
}
