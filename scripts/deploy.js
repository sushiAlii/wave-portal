const hre = require("hardhat");
const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("4.1"),
  });

  await waveContract.deployed();

  // const [deployer] = await hre.ethers.getSigners();
  // const accountBalance = await deployer.getBalance();

  // console.log("Account Deployed by", deployer.address);
  // console.log("Balance:", accountBalance.toString());
  console.log("Wave Portal Address:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("Something Happened!", error);
    process.exit(1);
  }
};

runMain();
