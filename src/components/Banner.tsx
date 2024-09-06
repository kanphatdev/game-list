import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

interface BannerProps {
  gameBanner: any; // Assuming gameBanner has multiple properties
}

const Banner: React.FC<BannerProps> = ({ gameBanner }) => {
  useEffect(() => {
    console.log(gameBanner);
  }, [gameBanner]);

  const { theme } = useTheme();

  return (
    <div className="w-full relative">
      {/* Banner Image */}
      <img
        src={gameBanner.background_image}
        alt={gameBanner.name}
        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t opacity-80 rounded-lg ${
          theme === 'dark'
            ? 'from-deepBlue via-transparent to-transparent'
            : 'from-lightYellow via-transparent to-transparent'
        }`}
      ></div>

      {/* Game Info */}
      <div
        className={`absolute bottom-4 left-4 ${
          theme === 'dark' ? 'text-lightPurple' : 'text-navyBlue'
        }`}
      >
        {/* Game Name with theme-based color */}
        <h2
          className={`text-2xl md:text-3xl font-bold ${
            theme === 'dark' ? 'text-lightPurple' : 'text-navyBlue'
          }`}
        >
          {gameBanner.name}
        </h2>
        
        {/* Genre button styled with the custom colors */}
        <button
          className={`mt-2 px-4 py-2 rounded-lg ${
            theme === 'dark'
              ? 'bg-softBlue text-greyBlue'
              : 'bg-coralRed text-softYellow'
          } btn btn-ghost capitalize`}
        >
          get now
        </button>
      </div>
    </div>
  );
};

export default Banner;
