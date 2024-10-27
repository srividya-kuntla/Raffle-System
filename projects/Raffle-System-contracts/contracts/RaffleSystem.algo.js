"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = initialize;
exports.buyTickets = buyTickets;
exports.pickWinner = pickWinner;
// Raffle System contract variables
var participants = [];
var ownerAddress;
// Initialize the contract with the owner's address
function initialize(owner) {
    ownerAddress = owner;
}
// Allow participants to purchase tickets
function buyTickets(participant, ticketCount) {
    var existingParticipant = participants.find(function (p) { return p.address === participant; });
    if (existingParticipant) {
        existingParticipant.ticketCount += ticketCount;
    }
    else {
        participants.push({ address: participant, ticketCount: ticketCount });
    }
}
// Function to pick a random winner
function pickWinner() {
    if (participants.length === 0)
        return "No participants available";
    var totalTickets = participants.reduce(function (sum, p) { return sum + p.ticketCount; }, 0);
    var winningTicket = Math.floor(Math.random() * totalTickets);
    var cumulativeTickets = 0;
    for (var _i = 0, participants_1 = participants; _i < participants_1.length; _i++) {
        var p = participants_1[_i];
        cumulativeTickets += p.ticketCount;
        if (winningTicket < cumulativeTickets) {
            return p.address;
        }
    }
    return "Error picking winner";
}
