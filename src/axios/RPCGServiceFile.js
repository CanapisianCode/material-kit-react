import cardEndpoints from "../axios/RPCGEndpoints"; // Adjust the import path accordingly

// const CardService = {
//   getAllCards: async () => {
//     try {
//       const response = await cardEndpoints.getAllCards();
//       console.log(response.data.items);
//       return response.data.items; // Assuming response data is directly what you need
//     } catch (error) {
//       console.error("Error fetching cards:", error.message);
//       throw error;
//     }
//   },
// };

// export default CardService;

const CardService = {
  getAllCards: async () => {
    try {
      const response = await cardEndpoints.getAllCards();
      console.log(response.data.items);
      return response.data.items; // Assuming response data is directly what you need
    } catch (error) {
      console.error("Error fetching cards:", error.message);
      throw error;
    }
  },
};

export default CardService;
