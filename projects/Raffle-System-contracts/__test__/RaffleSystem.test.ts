import { initialize, buyTickets, pickWinner } from '../contracts/RaffleSystem.algo';

test('initializes with owner', () => {
  initialize('test-owner-address');
  expect(ownerAddress).toBe('test-owner-address');
});

test('allows users to buy tickets', () => {
  buyTickets('user1', 2);
  expect(participants[0].ticketCount).toBe(2);
});

test('picks a winner', () => {
  const winner = pickWinner();
  expect(participants.some(p => p.address === winner)).toBe(true);
});
