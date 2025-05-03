import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const MovieTrailer = ({ movieId, onClose }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const fetchTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, [movieId]);

  if (!trailerVideo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl z-50">✖</button>
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=0`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
