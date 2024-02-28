import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  // networks: {
  //   hardhat: {
  //     chainId: 31337,
  //   },
  // },
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  paths: {
    artifacts: "./client/app/artifacts",
  },
};

export default config;
