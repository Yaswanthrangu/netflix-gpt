import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="aspect-video w-screen" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key + "&si=jsV-bBgqkMeOkQEm"}
      title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground