import React from "react";
import ConnectWallet from "./components/ConnectWallet";
import Transact from "./components/Transact";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Raffle System</h1>
      <ConnectWallet />
      <Transact />
    </div>
  );
};

export default Home;
