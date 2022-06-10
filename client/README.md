# Vote Dapp Test

## Steps to run the front-end

Currently, the contracts are deployed on the Rinkeby testnet, so be make sure that you changed the network to Rinkeby in Metamask
- `$ cd client`
- `$ yarn`
- `$ yarn start`

## Steps to test the smart contract

- `$ cd backend`
- `$ npm i`
- rename the .env.example file to .env and then fill in the private key of wallet 
- `$ npx hardhat compile`
- `$ npx hardhat test`


Deploying && Verifying
- `$ npx hardhat run ./scripts/deploy.ts --network rinkeby`
- `$ npx hardhat verify --network rinkeby <CONTRACT_ADDRESS>`

## Change contract address/abi in the front-end

- Move to the config.ts file in the project root directory of front-end and then replace the `VOTING_FACTORY_ADDRESS` and ABI variables