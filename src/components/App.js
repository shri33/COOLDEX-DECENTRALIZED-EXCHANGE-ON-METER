import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import getContracts from '../utils/getContracts';

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contracts, setContracts] = useState({});

  useEffect(() => {
    const init = async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      const contracts = await getContracts(web3);

      setWeb3(web3);
      setAccounts(accounts);
      setContracts(contracts);
    };

    init();
  }, []);

  const buyTokens = async () => {
    if (!web3 || !contracts.dexInstance || !accounts.length) return; // Check for initialization
    await contracts.dexInstance.methods.buyTokens().send({ from: accounts[0], value: web3.utils.toWei('0.1', 'ether') });
  };

  const sellTokens = async () => {
    if (!web3 || !contracts.tokenInstance || !contracts.dexInstance || !accounts.length) return; // Check for initialization
    await contracts.tokenInstance.methods.approve(contracts.dexInstance.options.address, web3.utils.toWei('10', 'ether')).send({ from: accounts[0] });
    await contracts.dexInstance.methods.sellTokens(web3.utils.toWei('10', 'ether')).send({ from: accounts[0] });
  };

  return (
    <div>
      <h1>CoolDEX</h1>
      <button onClick={buyTokens}>Buy Tokens</button>
      <button onClick={sellTokens}>Sell Tokens</button>
    </div>
  );
}

export default App;
