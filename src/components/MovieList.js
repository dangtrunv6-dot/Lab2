import MovieItem from "./MovieItem";
import { movies as allMovies } from "../data/movies";

function MovieList({ movies, favorites, onToggleFavorite, onViewDetail }) {
  const total = allMovies.length;
  const favoriteCount = favorites.length;
  const displayCount = movies.length;

  return (
    <>
      {/* Stats bar */}
      <div
        className="d-flex gap-0 mb-3 border rounded overflow-hidden"
        style={{ fontSize: "0.9rem", width: "fit-content" }}
      >
        <span className="px-3 py-1 border-end">
          Tổng: <strong>{total}</strong>
        </span>
        <span className="px-3 py-1 border-end">
          Yêu thích: <strong>{favoriteCount}</strong>
        </span>
        <span className="px-3 py-1">
          Đang hiển thị: <strong>{displayCount}</strong>
        </span>
      </div>

      {movies.length === 0 ? (
        <p className="text-center text-muted mt-4">No movies found.</p>
      ) : (
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                isFavorite={favorites.includes(movie.id)}
                onToggleFavorite={onToggleFavorite}
                onViewDetail={onViewDetail}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default MovieList;
