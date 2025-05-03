import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import qwenai from "../utils/qwenai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector(store => store.config.lang);
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "You are a highly intelligent movie recommendation system trained specifically on Indian cinema. Based on the user's query: " +
      searchText.current.value +
      ", recommend exactly 6 Indian movies that strictly match the genre, tone, and context implied in the query. Ensure all suggestions are accurate, relevant, and context-aware. Return only the movie names, comma-separated, with no additional text.";

    try {
      setLoading(true);
      const response = await qwenai.chat.completions.create({
        model: "qwen/qwen3-235b-a22b:free",
        messages: [{ role: "user", content: prompt }],
      });

      const gptMovies = response.choices[0]?.message?.content
        ?.split(",")
        .map((name) => name.trim());
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("GPT search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg cursor-pointer"
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Loading..." : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
