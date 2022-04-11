

// const controler_address='0xbd6E392A7D8A52f6DF3c1B765EcAb14F38F27A43';
// const controller =new web3.eth.contract(controller_abi).at(controller_address);
// // async function register(name, owner, duration) {
// const name="krishiv";

  // Generate a random value to mask our commitment
  const random = new Uint8Array(32);
  //crypto.getRandomValues(random);
  const salt = "0x" + Array.from(random).map(b => b.toString(16).padStart(2, "0")).join("");
  console.log(salt);
  // Submit our commitment to the smart contract
//   const commitment = await controller.makeCommitment(name, owner, salt);
//   const tx = await controller.commit(commitment);
//   // Add 10% to account for price fluctuation; the difference is refunded.
//   const price = (await controller.rentPrice(name, duration)) * 1.1;
//   // Wait 60 seconds before registering
//   setTimeout(async () => {
//     // Submit our registration request
//     await controller.register(name, owner, duration, salt, {value: price});
//   }, 60000);
// }