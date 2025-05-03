import { Play } from 'lucide-react';
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, movieId, onPlayClick }) => {
  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="w-screen absolute text-white md:bg-gradient-to-r md:from-black to-transparent px-4 py-6 md:pt-[18%] md:pl-12 aspect-video">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
        {lang[langKey].bgTitle}
      </h1>

      <p className="hidden md:block pt-2 text-base md:text-lg lg:text-xl max-w-xl">
        {lang[langKey].overview}
      </p>

      <div className="flex flex-row gap-3 mt-2 flex-wrap">
        <button
          onClick={onPlayClick}
          className="bg-white text-black py-2 px-4 sm:py-2.5 sm:px-6 md:py-3 md:mt-6 md:px-10 text-sm sm:text-base md:text-lg rounded-md flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <Play size={18} fill="black" />
          {lang[langKey].button1}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
