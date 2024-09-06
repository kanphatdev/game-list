import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Flame, MessageCircle, Star } from "lucide-react";

// Define the Game interface based on the structure of the games
interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic?: number;
  rating?: number;
  reviews_count?: number;
  suggestions_count?: number;
}

interface GamesListByGenreIdProps {
  gameList: Game[]; // Define the prop type as an array of Game objects
}

const GamesListByGenreId: React.FC<GamesListByGenreIdProps> = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, [gameList]);

  const { theme } = useTheme();

  // Define theme-based colors
  const themeColors = {
    dark: {
      cardBackground: "bg-deepBlue",
      cardText: "text-lightPurple",
      iconColor: "text-coralRed",  // Default icon color for dark mode
    },
    light: {
      cardBackground: "bg-lightYellow",
      cardText: "text-navyBlue",
      iconColor: "text-peach",  // Default icon color for light mode
    },
  };

  // Choose colors based on current theme
  const currentColors = themeColors[theme] || themeColors.light;

  return (
    <div className="p-4">
      <h2 className="capitalize font-bold text-2xl mb-6"> {/* Added margin-bottom */}
        popular game
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {gameList.map((game) => (
          <div
            key={game.id}
            className={`card ${currentColors.cardBackground} shadow-xl transform transition-transform hover:scale-105`} // Added hover scale effect
          >
            <figure>
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className={`card-body ${currentColors.cardText}`}>
              <h3 className="card-title">
                {game.name}{" "}
                {game.metacritic && (
                  <span className="badge badge-ghost bg-emerald-300">{game.metacritic}</span>
                )}
              </h3>
              <h2 className="flex items-center gap-4">
                {game.rating && (
                  <span className="flex items-center">
                    <Star className={`mr-1 ${currentColors.iconColor}`} />{" "}
                    {game.rating}
                  </span>
                )}
                {game.reviews_count && (
                  <span className="flex items-center">
                    <MessageCircle className={`mr-1 ${currentColors.iconColor}`} />{" "}
                    {game.reviews_count}
                  </span>
                )}
                {game.suggestions_count && (
                  <span className="flex items-center">
                    <Flame className={`mr-1 ${currentColors.iconColor}`} />{" "}
                    {game.suggestions_count}
                  </span>
                )}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesListByGenreId;
