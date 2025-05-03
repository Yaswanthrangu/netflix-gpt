import { useSelector } from 'react-redux';
import { useState } from 'react';
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import MovieTrailer from "./MovieTrailer";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[40%] bg-black md:p-0 relative">
      <VideoTitle
        title={original_title}
        overview={overview}
        movieId={id}
        onPlayClick={() => setShowTrailer(true)}
      />
      <VideoBackground movieId={id} />

      {showTrailer && (
        <MovieTrailer movieId="976573" onClose={() => setShowTrailer(false)} />
      )}
    </div>
  );
};

export default MainContainer;
