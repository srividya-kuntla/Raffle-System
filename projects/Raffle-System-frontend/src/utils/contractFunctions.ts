// contractFunctions.ts

import algosdk from "algosdk";
import network from "../interfaces/network"; // adjust if necessary

// Define the function to add a ticket to the contract
export const addTicketToContract = async (address: string) => {
  try {
    // Initialize the Algorand client with network configurations
    const algodClient = new algosdk.Algodv2(
      network.algodToken,
      network.algodServer,
      network.algodPort
    );

    // Set up transaction parameters
    const params = await algodClient.getTransactionParams().do();
    
    // Replace these with your smart contract details
    const appId = 123456; // Your Algorand App ID
    const appArgs = [new TextEncoder().encode("buy_ticket")]; // Method to invoke in the contract

    const txn = algosdk.makeApplicationNoOpTxn(address, params, appId, appArgs);
    
    // Sign and submit the transaction (assuming user's wallet is connected)
    // Add your wallet signing logic here if using something like MyAlgoWallet or WalletConnect
    const privateKey = new Uint8Array(Buffer.from("YOUR_HEX_PRIVATE_KEY", "hex"));
    const signedTxn = txn.signTxn(privateKey);
    const sendTx = await algodClient.sendRawTransaction(signedTxn).do();

    return sendTx;
  } catch (error) {
    console.error("Error in adding ticket to contract:", error);
    throw error;
  }
};
