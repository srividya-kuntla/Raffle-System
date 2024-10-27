import algosdk from 'algosdk';

// Raffle System contract variables
let participants: Array<{ address: string; ticketCount: number }> = [];
let ownerAddress: string;

// Initialize the contract with the owner's address
export function initialize(owner: string) {
  ownerAddress = owner;
}

// Allow participants to purchase tickets
export function buyTickets(participant: string, ticketCount: number) {
  const existingParticipant = participants.find(p => p.address === participant);
  if (existingParticipant) {
    existingParticipant.ticketCount += ticketCount;
  } else {
    participants.push({ address: participant, ticketCount });
  }
}

// Function to pick a random winner
export function pickWinner(): string {
  if (participants.length === 0) return "No participants available";

  const totalTickets = participants.reduce((sum, p) => sum + p.ticketCount, 0);
  const winningTicket = Math.floor(Math.random() * totalTickets);
  let cumulativeTickets = 0;

  for (const p of participants) {
    cumulativeTickets += p.ticketCount;
    if (winningTicket < cumulativeTickets) {
      return p.address;
    }
  }
  return "Error picking winner";
}
