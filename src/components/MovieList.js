import MovieItem from "./MovieItem";

function MovieList({ movies, favorites, onToggleFavorite, onViewDetail }) {
  if (movies.length === 0) {
    return <p className="text-center text-muted mt-4">No movies found.</p>;
  }

  return (
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
  );
}

export default MovieList;
