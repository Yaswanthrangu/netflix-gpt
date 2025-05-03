import MovieCard from "./MovieCard";

const MovieListForGpt = ({ title, movies }) => {
  return (
    <div className="min-w-[200px] flex-shrink-0 px-4">
      <h1 className="text-white text-lg font-semibold mb-2">{title}</h1>
      {movies?.length > 0 && (
        <MovieCard key={movies[0].id} posterPath={movies[0].poster_path} />
      )}
    </div>
  );
};

export default MovieListForGpt;
