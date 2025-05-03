import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ posterPath, movieId, onClick }) => {
  if (!posterPath) return null;

  return (
    <div
      className="w-36 md:w-48 pr-4 transform transition duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onClick(movieId)}
    >
      <img className="rounded-2xl" src={IMG_CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
