import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieTrailer from "./MovieTrailer";

const MovieList = ({ title, movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  return (
    <div className="px-6">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} onClick={handleCardClick} />
          ))}
        </div>
      </div>
      {selectedMovieId && <MovieTrailer movieId={selectedMovieId} onClose={() => setSelectedMovieId(null)} />}
    </div>
  );
};

export default MovieList;
