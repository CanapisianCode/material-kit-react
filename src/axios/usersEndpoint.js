import axios from "axios";

const API_URL = "https://localhost:50001"; // replace with your API URL

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // server responded with a status code outside of the 2xx range
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // no response received
      throw new Error("No response received from server.");
    } else {
      // something else happened
      throw new Error("An error occurred while making the request.");
    }
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users/5`, { withCredentials: true });
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      // server responded with a status code outside of the 2xx range
      throw new Error(error.response.data.message);
    } else if (error.request) {
      // no response received
      throw new Error("No response received from server.");
    } else {
      // something else happened
      throw new Error("An error occurred while making the request.");
    }
  }
};

export const usersEndpoint = { login, getUsers };
