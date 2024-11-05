import axios from "axios";

var cardsEndpoint = { endPoint: "https://localhost:50001/api" };

// Get all cards
cardsEndpoint.getAllCards = () => {
  const config = {
    method: "GET",
    url: `${cardsEndpoint.endPoint}/RPCG`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  };

  return axios(config);
};

export default cardsEndpoint;
