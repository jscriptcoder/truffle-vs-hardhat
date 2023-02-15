<div align="center">
  <img src="public/hardhat_logo.png" height="200" />
</div>

## Scripts

- `npx hardhat compile`: compiles the contracts
- `npx hardhat run scripts/migrate.js`: deploys on a local network
- `npx hardhat run --network ganache scripts/migrate.js`: deploys on Ganache (needs env vars to be set)
- `npx hardhat run --network goerli scripts/migrate.js`: deploys on Goerli testnet (needs env vars to be set)
- `npx hardhat test`: runs the tests
