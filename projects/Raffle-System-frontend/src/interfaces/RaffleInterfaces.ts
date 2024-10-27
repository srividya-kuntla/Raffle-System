export interface IRaffleTicket {
    id: number;
    participantAddress: string;
  }
  
  export interface IParticipant {
    address: string;
    tickets: number;
  }
  
  export interface IWinner {
    address: string;
    prize: number;
  }
  