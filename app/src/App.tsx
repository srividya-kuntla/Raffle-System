import React, { useState } from "react";
import algosdk from "algosdk";

const App = () => {
  const [appId, setAppId] = useState<number | null>(null);
  const [numTickets, setNumTickets] = useState(0);

  const algodClient = new algosdk.Algodv2("YOUR_API_KEY", "https://testnet-algorand.api.purestake.io/ps2", "");

  const handleBuyTicket = async () => {
    if (!appId) return;
    // Call the Algorand contract's "buy_ticket" method
    const tx = await algodClient.sendRawTransaction("...");
    console.log("Ticket purchased:", tx);
  };

  const handleRevealWinner = async () => {
    if (!appId) return;
    // Call the Algorand contract's "reveal_winner" method
    const tx = await algodClient.sendRawTransaction("...");
    console.log("Winner revealed:", tx);
  };

  return (
    <div>
      <h1>Algorand Raffle System</h1>
      <button onClick={handleBuyTicket}>Buy Ticket</button>
      <button onClick={handleRevealWinner}>Reveal Winner</button>
      <p>Tickets Sold: {numTickets}</p>
    </div>
  );
};

export default App;
