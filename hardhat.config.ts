import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/app/artifacts",
  },
};

export default config;
