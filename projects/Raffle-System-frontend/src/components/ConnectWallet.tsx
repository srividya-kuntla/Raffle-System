import React, { useState } from "react";
import algosdk from "algosdk";

const ConnectWallet = () => {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    // Code to connect Algorand wallet using Algorand SDK
    setConnected(true);
  };

  return <button onClick={connectWallet}>{connected ? "Wallet Connected" : "Connect Wallet"}</button>;
};

export default ConnectWallet;
