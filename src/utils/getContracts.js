import Token from '../CONTRACT/Token.json';
import DEX from '../CONTRACT/DEX.json';

const getContracts = async (web3) => {
  const networkId = await web3.eth.net.getId();

  const deployedNetworkToken = Token.networks[networkId];
  const tokenInstance = new web3.eth.Contract(
    Token.abi,
    deployedNetworkToken && deployedNetworkToken.address,
  );

  const deployedNetworkDEX = DEX.networks[networkId];
  const dexInstance = new web3.eth.Contract(
    DEX.abi,
    deployedNetworkDEX && deployedNetworkDEX.address,
  );

  return { tokenInstance, dexInstance };
};

export default getContracts;
