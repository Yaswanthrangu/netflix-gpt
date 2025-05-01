import { Play } from 'lucide-react';
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux"

const VideoTitle = ({title, overview}) => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="w-screen aspect-video pt-[18%] pl-15 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{lang[langKey].bgTitle}</h1>
      <p className="py-6 w-1/3 text-lg">{lang[langKey].overview}</p>
      <div className="flex">
      <button className="bg-white text-black p-4 px-12 text-xl rounded-lg flex items-center gap-2 hover:bg-gray-800 hover:text-white cursor-pointer">
        <Play size={20} fill="black" />
        {lang[langKey].button1}
      </button>
        <button className="mx-2 bg-gray-800 text-white p-4 px-12 text-xl rounded-lg hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">{lang[langKey].button2}</button>
      </div>
    </div>
  )
}

export default VideoTitle;