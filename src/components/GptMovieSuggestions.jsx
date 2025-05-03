import { useSelector } from "react-redux";
import MovieListForGpt from "./MovieListForGpt";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  if (!movieNames || !movieResults) return null;

  const getFirstUniqueMovie = (movies) => {
    const seen = new Set();
    for (let movie of movies) {
      if (!seen.has(movie.title)) {
        seen.add(movie.title);
        return [movie];
      }
    }
    return [];
  };

  return (
    <div className="text-white bg-black/40 p-4 m-4 ">
      <div className="md:flex overflow-x-auto space-x-4 scrollbar-hide no-scrollbar">
        {movieNames.map((movieName, index) => (
          <MovieListForGpt
            key={movieName}
            title={movieName}
            movies={getFirstUniqueMovie(movieResults[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
