import React from "react";

interface WinnerProps {
  winner: string | null;
}

const Winner: React.FC<WinnerProps> = ({ winner }) => (
  <div>
    <h2>Winner</h2>
    {winner ? <p>Congratulations, {winner}!</p> : <p>No winner selected yet.</p>}
  </div>
);

export default Winner;
