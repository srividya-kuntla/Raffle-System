// helperFunctions.ts
export const formatAddress = (address: string): string =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;
  
  export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  