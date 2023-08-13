require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon: {
      url: process.env.POLYGON_MUMBAI_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    },
    // sepolia: {
    //   url: process.env.INFURA_SEPOLIA_ENDPOINT,
    //   accounts: [process.env.PRIVATE_KEY]
    // }
  }
};
