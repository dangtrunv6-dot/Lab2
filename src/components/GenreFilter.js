const GENRES = ["All Genre", "Action", "Animation", "Comedy", "Drama", "Romance", "Sci-Fi"];

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "rating-high", label: "Rating High→Low" },
  { value: "rating-low", label: "Rating Low→High" },
];

function GenreFilter({ selectedGenre, onGenreChange, sortBy, onSortChange }) {
  return (
    <div className="d-flex gap-2">
      <select
        className="form-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        {GENRES.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        className="form-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
