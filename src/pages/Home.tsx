import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 min-h-screen ${
        theme === 'dark' ? 'bg-deepBlue text-lightPurple' : 'bg-lightYellow text-gray-900'
      } grid grid-cols-4`}
    >
     <div className="bg-red-400 h-full hidden md:block">genre</div>
     <div className="col-span-4 md:col-span-3 bg-blue-400">Game List</div>
    </div>
  );
};

export default Home;
