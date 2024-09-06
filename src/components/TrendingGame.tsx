import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import theme context

// Define the type for the game object
interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface TrendingGameProps {
  gameList: Game[]; // Use the defined type for the game list
}

const TrendingGame: React.FC<TrendingGameProps> = ({ gameList }) => {
  const { theme } = useTheme(); // Get the current theme

  useEffect(() => {
    console.log(gameList);
  }, [gameList]);

  return (
    <div className="px-4 md:block"> {/* Added padding to both sides */}
      <h2
        className={`capitalize ${
          theme === 'dark' ? 'text-softBlue' : 'text-navyBlue'
        } text-2xl font-bold mt-6 mb-4 hidden md:block`} 
      >
        trending games
      </h2>

      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {gameList.slice(0, 4).map((game) => (
          <div
            key={game.id}
            className={`card rounded-lg overflow-hidden mx-2 transform transition duration-300 hover:scale-105 ${/* Added hover scale */
              theme === 'dark'
                ? 'bg-deepBlue shadow-md'
                : 'bg-lightYellow shadow-xl'
            }`}
          >
            <figure className="relative">
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                  theme === 'dark'
                    ? 'from-deepBlue via-transparent to-transparent'
                    : 'from-lightYellow via-transparent to-transparent'
                }`}
              ></div>
            </figure>
            <div
              className={`card-body p-4 mt-8 ${
                theme === 'dark' ? 'text-lightPurple' : 'text-navyBlue'
              }`}
            >
              <h2 className="card-title text-xl font-bold">{game.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGame;
