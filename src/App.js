import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { movies as allMovies } from "./data/movies";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genre");
  const [sortBy, setSortBy] = useState("default");
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Filter: chỉ hiển thị đúng tên phim (tìm kiếm theo title)
  const filteredMovies = allMovies
    .filter((movie) => {
      const matchTitle = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchGenre =
        selectedGenre === "All Genre" ||
        movie.genre.toLowerCase() === selectedGenre.toLowerCase();
      return matchTitle && matchGenre;
    })
    .sort((a, b) => {
      if (sortBy === "rating-high") return b.rating - a.rating;
      if (sortBy === "rating-low") return a.rating - b.rating;
      return 0;
    });

  const handleToggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleViewDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div
      className={`min-vh-100 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <div className="container py-4">
        <Header />

        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
        ) : (
          <>
            <div className="mb-3">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            <div className="mb-3">
              <GenreFilter
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
            <MovieList
              movies={filteredMovies}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onViewDetail={handleViewDetail}
            />
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
