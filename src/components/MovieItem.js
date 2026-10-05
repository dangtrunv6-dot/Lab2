import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";

function MovieItem({ movie, isFavorite, onToggleFavorite, onViewDetail }) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre}</td>
      <td>{movie.year}</td>
      <td>{movie.rating}</td>
      <td className="d-flex gap-2">
        <Button
          variant={isFavorite ? "warning" : "outline-secondary"}
          size="sm"
          onClick={() => onToggleFavorite(movie.id)}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FaStar /> : <CiStar />}
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => onViewDetail(movie)}
        >
          View Details
        </Button>
      </td>
    </tr>
  );
}

export default MovieItem;
