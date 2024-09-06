import { useEffect, useState } from "react";
import Globalapi from "../service/Globalapi";
import { useTheme } from "../context/ThemeContext";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const GenreList: React.FC = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active item index
  const { theme } = useTheme();

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = async () => {
    try {
      const resp = await Globalapi.getGenreList();
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    } catch (error) {
      console.error('Error fetching genre list:', error);
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(index); // Set the active index
  };

  return (
    <div
      className={`p-4 border-r ${
        theme === 'dark' ? 'bg-deepBlue border-greyBlue' : 'bg-lightYellow border-peach'
      }`}
    >
      <h2
        className={`text-xl font-bold mb-4 ${
          theme === 'dark' ? 'text-lightPurple' : 'text-coralRed'
        }`}
      >
        Genre
      </h2>
      <div className="space-y-2">
        {genreList.map((item, index) => (
          <div
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
              activeIndex === index
                ? (theme === 'dark' ? 'bg-softBlue text-lightPurple' : 'bg-coralRed text-lightYellow')
                : (theme === 'dark' ? 'hover:bg-mediumBlue' : 'hover:bg-softYellow')
            } transition-colors`}
            key={item.id}
            onClick={() => handleClick(index)} // Handle click event
          >
            <img
              src={item.image_background}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-full"
            />
            <span
              className={`text-base ${
                activeIndex === index
                  ? (theme === 'dark' ? 'text-lightPurple' : 'text-lightYellow')
                  : (theme === 'dark' ? 'text-lightPurple' : 'text-navyBlue')
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
