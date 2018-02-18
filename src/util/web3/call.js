// this is the contract abi for the contract we are using..
import contract_abi from '../../../build/contracts/erc721.json'
// this is the address of the contract on the test net
const address = '0x78f831572e27585f6a2634035e227780c521ed31'
// addresses under our control to give tokens to
const addys = ["0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5", "0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e", "0x627306090abaB3A6e1400e9345bC60c78a8BEf57", "0xf17f52151EbEF6C7334FAD080c5704D77216b732"];
// token metadata
const imageUrl = "image2.jpg"
const type = "retail"


const getTotalSupply = (address, web3) => {
  const VotingContract = web3.eth.contract(contract_abi.abi);
  const contractInstance = VotingContract.at(address);
  return contractInstance.totalSupply((err, result) => {
    if (!err) {
      return result
    }
    console.log(err)
   });
}
const getTokenName = (address, web3) => {
  const VotingContract = web3.eth.contract(contract_abi.abi);
  const contractInstance = VotingContract.at(address);
  return contractInstance.getTokenName((err, result) => {
    if (!err) {
      return result
    }
    console.log(err)
 });
}

// need reference to web3 from redux
 const addAsset = (attribute, addresses, imageUrl, type, web3) => {
  const VotingContract = web3.eth.contract(contract_abi.abi);
  const contractInstance = VotingContract.at(address);
  return contractInstance.addAsset.call(attribute, addresses, imageUrl, type, {from: web3.eth.accounts[0]}, function(err, res) {
    if (!err) {
      return res;
    }
    console.log(err);
  });
 }

module.exports = {
  addAsset,
  getTokenName,
  getTotalSupply,
}