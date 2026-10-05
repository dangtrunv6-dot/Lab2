import { Button } from "react-bootstrap";

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">🎬 {movie.title}</h5>
      </div>
      <div className="card-body">
        <table className="table table-borderless mb-0">
          <tbody>
            <tr>
              <th style={{ width: "140px" }}>Genre</th>
              <td>{movie.genre}</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{movie.year}</td>
            </tr>
            <tr>
              <th>Rating</th>
              <td>{movie.rating}</td>
            </tr>
            <tr>
              <th>Director</th>
              <td>{movie.director}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>{movie.duration} minutes</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{movie.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-footer text-end">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default MovieDetail;
