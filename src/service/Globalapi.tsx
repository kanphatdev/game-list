import axios, { AxiosInstance } from "axios";

// API key
const key: string = "8448b8665d2647479542a35fbf581c7a";

// Create an Axios instance with base URL
const axiosCreate: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key, // Include the API key as a default parameter for all requests
  },
});

// Define the function to fetch the genre list
const getGenreList = () => {
  return axiosCreate.get("genres");
};

// Define the function to fetch all games
const getAllgames = () => {
  return axiosCreate.get("games");
};

export default {
  getGenreList,
  getAllgames,
};
