import React from 'react';
import { Moon, Sun, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; 

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`p-4 flex items-center justify-between ${
        theme === 'dark' ? 'bg-deepBlue text-lightPurple' : 'bg-lightYellow text-gray-900'
      } transition-colors duration-300`}
    >
      <nav className="flex w-full items-center">
        <div className="text-xl font-bold">Game List</div>

        <div className="flex-1 mx-4 flex justify-center">
          <div className="relative w-full max-w-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className={`h-5 w-5 ${theme === 'dark' ? 'text-lightPurple' : 'text-gray-900'}`} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className={`w-full pl-10 p-2 rounded-md border ${
                theme === 'dark' ? 'border-greyBlue bg-transparent text-lightPurple' : 'border-peach bg-transparent text-gray-900'
              } focus:ring-2 focus:ring-peach transition-colors duration-300`}
            />
          </div>
        </div>

        <div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md ${
              theme === 'dark' ? 'bg-mediumBlue text-lightPurple' : 'bg-softYellow text-coralRed'
            } transition-colors duration-300`}
          >
            {theme === 'dark' ? <Moon /> : <Sun />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
