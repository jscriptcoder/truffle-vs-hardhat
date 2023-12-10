# Truffle vs Hardhat vs Foundry (IN PROGRESS)

A comparison between these three frameworks for Smart Contract development.

**Node:** this repo is purely for learning purposes.

## Getting Started

### Download source and install dependencies

Open a terminal and run the following commands:

```bash
git clone https://github.com/jscriptcoder/truffle-vs-hardhat-vs-foundry.git
cd truffle-vs-hardhat-vs-foundry
npm install
```

This will install common dependencies and individual ones for each project.

1. [Truffle](truffle)
2. [Hardhat](hardhat)
3. [Foundry](foundry)

### Environment variables

Create a `.env` file with the following environment variables (see [.env.example](.env.example) file):

```
MNEMONIC=...
PROJECT_URL=...
```

The `MNEMONIC` 12 words are provided by Ganache or Metamask. `PROJECT_URL` is provided by Ganache or the Node Provider (Infura, Alchemy, etc...) where to depley the contracts. We are gonna be testing functionality with one of our accounts, either on our local or a testnet.
