const Token = artifacts.require("Token");
const DEX = artifacts.require("DEX");

module.exports = async function (deployer) {
  await deployer.deploy(Token, 1000000);
  const tokenInstance = await Token.deployed();
  await deployer.deploy(DEX, tokenInstance.address);
};
