const hre = require("hardhat");

async function main() {
  const GridToken = await hre.ethers.getContractFactory("GridToken");
  const gridToken = await GridToken.deploy(100000000);

  await gridToken.deployed();

  console.log("Ocean Token deployed: ", gridToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
