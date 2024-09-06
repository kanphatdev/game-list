import axios, { AxiosInstance, AxiosResponse } from "axios";

// API key
const key: string = "8448b8665d2647479542a35fbf581c7a";

// Create an Axios instance with base URL
const axiosCreate: AxiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key, // Include the API key as a default parameter for all requests
  },
});

// Define interface for Genre and Game responses (customize these based on the actual API response structure)
interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
}

// Define the function to fetch the genre list with proper typing
const getGenreList = (): Promise<AxiosResponse<{ results: Genre[] }>> => {
  return axiosCreate.get("genres");
};

// Define the function to fetch all games with proper typing
const getAllGames = (): Promise<AxiosResponse<{ results: Game[] }>> => {
  return axiosCreate.get("games");
};

// Define the function to fetch games by genre ID with proper typing
const getGamesListByGenreId = (id: number): Promise<AxiosResponse<{ results: Game[] }>> => {
  return axiosCreate.get("games", {
    params: {
      genres: id, // Append genre ID as a parameter
    },
  });
};

// Export the API functions with proper typing
export default {
  getGenreList,
  getAllGames,
  getGamesListByGenreId,
};
