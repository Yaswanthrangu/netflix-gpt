import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  const langKey = useSelector(store => store.config.lang);
  return (
    movies.nowPlayingMovies &&(
      <div className="bg-black">
        <div className="mt-0 md:-mt-50 md:pl-12 relative z-20">
          <MovieList title={lang[langKey].list1} movies={movies.nowPlayingMovies} />
          <MovieList title={lang[langKey].list3} movies={movies.topRatedMovies} />
          <MovieList title={lang[langKey].list4} movies={movies.upcomingMovies} />  
          <MovieList title={lang[langKey].list2} movies={movies.popularMovies} />
          
        </div>
      </div>
    )
  )
}

export default SecondaryContainer