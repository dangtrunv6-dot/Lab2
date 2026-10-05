function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search movies by title..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
