    import { useEffect, useState } from "react";
    import Globalapi from "../service/Globalapi";
    import { useTheme } from "../context/ThemeContext";

    // Define the Genre interface
    interface Genre {
      id: number;
      name: string;
      image_background: string;
    }

    // Define the prop type for GenreList component
    interface GenreListProps {
      GenreId: (id: number) => void; // Function that takes a number and returns void
    }

    const GenreList: React.FC<GenreListProps> = ({ GenreId }) => {
      const [genreList, setGenreList] = useState<Genre[]>([]); // Genre list state with Genre type
      const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track active item index
      const [selectedGenreName, setSelectedGenreName] = useState<string>("Genre"); // State to track selected genre name
      const { theme } = useTheme(); // Theme from the context

      useEffect(() => {
        getGenreList(); // Fetch genres when the component mounts
      }, []);

      // Function to fetch genre list from the API
      const getGenreList = async () => {
        try {
          const resp = await Globalapi.getGenreList();
          setGenreList(resp.data.results); // Update state with the fetched genres
        } catch (error) {
          console.error("Error fetching genre list:", error);
        }
      };

      // Handle genre item click
      const handleClick = (index: number, genreId: number, genreName: string) => {
        setActiveIndex(index); // Set the clicked genre as active
        setSelectedGenreName(genreName); // Update the selected genre name
        GenreId(genreId); // Pass the selected genre ID to the parent component
      };

      return (
        <div
          className={`p-4 border-r ${
            theme === "dark" ? "bg-deepBlue border-greyBlue" : "bg-lightYellow border-peach"
          }`}
        >
          {/* Display the selected genre name as the header */}
          <h2
            className={`text-xl font-bold mb-4 ${
              theme === "dark" ? "text-lightPurple" : "text-coralRed"
            }`}
          >
            {selectedGenreName} {/* This will now update dynamically */}
          </h2>
          <div className="space-y-2">
            {genreList.map((item, index) => (
              <div
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                  activeIndex === index
                    ? theme === "dark"
                      ? "bg-softBlue text-lightPurple"
                      : "bg-coralRed text-lightYellow"
                    : theme === "dark"
                    ? "hover:bg-mediumBlue"
                    : "hover:bg-softYellow"
                } transition-colors`}
                key={item.id}
                onClick={() => handleClick(index, item.id, item.name)} // Pass genre name to handleClick
              >
                <img
                  src={item.image_background}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span
                  className={`text-base ${
                    activeIndex === index
                      ? theme === "dark"
                        ? "text-lightPurple"
                        : "text-lightYellow"
                      : theme === "dark"
                      ? "text-lightPurple"
                      : "text-navyBlue"
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
