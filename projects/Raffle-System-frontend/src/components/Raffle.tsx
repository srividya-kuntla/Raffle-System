import React, { useState } from "react";
import network from "../interfaces/network";
import { addTicketToContract } from "../utils/contractFunctions";

const Raffle: React.FC = () => {
  const [address, setAddress] = useState("");
  const [tickets, setTickets] = useState<string[]>([]);

  const buyTicket = async () => {
    try {
      await addTicketToContract(address);
      setTickets([...tickets, address]);
      setAddress("");
    } catch (error) {
      console.error("Ticket purchase failed:", error);
    }
  };

  return (
    <div>
      <h2>Buy a Ticket</h2>
      <input type="text" placeholder="Your Wallet Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <button onClick={buyTicket}>Buy Ticket</button>

      <h3>Participants</h3>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul>
    </div>
  );
};

export default Raffle;
