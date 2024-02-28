import { ethers } from "hardhat";

async function main() {
  // const [signer] = await ethers.getSigners();
  const Upload = await ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log(`Library deployed successfully to ${upload.address}`);

  // await upload.deployTransaction.wait();
  // await ethers.provider.send("hardhat_impersonateAccount", [signer.address]);
  // const uploadContract = new ethers.Contract(
  //   upload.address,
  //   Upload.interface,
  //   signer
  // );
  // await uploadContract.emitContractDeployedEvent(upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
