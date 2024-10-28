import algosdk from 'algosdk';

// Initialize Algod client
export const algodClient = new algosdk.Algodv2('YOUR_API_KEY', 'https://testnet-algorand.api.purestake.io/ps2', '');

// Deploy the smart contract
export const deployContract = async (contract: any) => {
  const txParams = await algodClient.getTransactionParams().do();
  const txn = algosdk.makeApplicationCreateTxnFromObject({
    from: 'YOUR_ADDRESS',
    suggestedParams: txParams,
    approvalProgram: contract.approval(),
    clearProgram: contract.clear(),
    numGlobalInts: 2,  // Update based on your contract's global state
  });
  const signedTxn = txn.signTxn('YOUR_PRIVATE_KEY');
  const txId = await algodClient.sendRawTransaction(signedTxn).do();
  return { appId: txId };
};

// Call contract method
export const callContractMethod = async (appId: number, method: string, args: any[]) => {
  const txParams = await algodClient.getTransactionParams().do();
  const txn = algosdk.makeApplicationNoOpTxn('YOUR_ADDRESS', txParams, appId, [method, ...args]);
  const signedTxn = txn.signTxn('YOUR_PRIVATE_KEY');
  return await algodClient.sendRawTransaction(signedTxn).do();
};
