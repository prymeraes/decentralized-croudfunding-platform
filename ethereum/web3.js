import Web3 from "web3";

let web3; //allows us to redefine the variable

// use typeof to see if a variable is defined
// this checks to see if we are running in the browser or on the server
// check to see if metamask has injected web3
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and metamask is running
  // this line of code ensures we are using the correct version of web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/d0d8ee067f574bff86e5c3e36f20c769"
  );
  web3 = new Web3(provider);
}

export default web3;
