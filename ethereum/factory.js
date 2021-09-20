import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x025E8691CaB302Ea8F8E63D7b2a6057d4B45440e"
);

export default instance;
