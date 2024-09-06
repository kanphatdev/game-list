import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import GenreList from "../components/GenreList";
import Globalapi from "../service/Globalapi";
import { AxiosResponse } from "axios";
import Banner from "../components/Banner";
import TrendingGame from "../components/TrendingGame";

interface Game {
  id: number;
  name: string;
  background_image: string; // Assuming the banner uses a background image
}

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [AllgamesList, setAllgamesList] = useState<Game[]>([]);

  // Function to fetch the list of all games
  const getAllgamesList = async (): Promise<void> => {
    try {
      const resp: AxiosResponse = await Globalapi.getAllgames();
      setAllgamesList(resp.data.results);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    getAllgamesList();
  }, []);

  return (
    <div
      className={`p-4 min-h-screen ${
        theme === "dark" ? "bg-deepBlue" : "bg-lightYellow text-gray-900"
      } grid grid-cols-4 px-5`}
    >
      <div className="h-full hidden md:block">
        <GenreList />
      </div>
      <div
        className={`col-span-4 md:col-span-3 ${
          theme === "dark" ? "bg-blue-400" : "bg-coralRed"
        } rounded-lg shadow-lg`}
      >
        {/* Pass the first game's banner as an example */}
        {AllgamesList.length > 0 && (
          <>
            <Banner gameBanner={AllgamesList[0]} />
            <TrendingGame/>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
