import { ethers } from "hardhat";

async function main() {
  const Upload = await ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log(`Library deployed successfully to ${upload.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
