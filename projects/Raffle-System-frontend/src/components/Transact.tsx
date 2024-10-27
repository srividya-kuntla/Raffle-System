import React, { useState } from "react";
import { buyTickets } from "../../../Raffle-System-contracts/contracts/RaffleSystem.algo";

const Transact = () => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleBuyTickets = async () => {
    await buyTickets("user-address", ticketCount);
  };

  return (
    <div>
      <input type="number" value={ticketCount} onChange={(e) => setTicketCount(Number(e.target.value))} />
      <button onClick={handleBuyTickets}>Buy Tickets</button>
    </div>
  );
};

export default Transact;
