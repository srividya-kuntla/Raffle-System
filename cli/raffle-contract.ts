import { algodClient, deployContract, callContractMethod } from './utils';

// Deploy the contract
export const deployRaffleContract = async () => {
  const contract = await deployContract(raffleContract);
  console.log(`Contract deployed with ID: ${contract.appId}`);
};

// Buy a ticket for the raffle
export const buyTicket = async (appId: number) => {
  const txResult = await callContractMethod(appId, 'buy_ticket', []);
  console.log('Ticket purchased:', txResult);
};

// Reveal the raffle winner
export const revealWinner = async (appId: number) => {
  const txResult = await callContractMethod(appId, 'reveal_winner', []);
  console.log('Winner revealed:', txResult);
};
