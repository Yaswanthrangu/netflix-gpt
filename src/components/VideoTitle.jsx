import { Play } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/3 text-lg">{overview}</p>
      <div className="flex">
      <button className="bg-white text-black p-4 px-12 text-xl rounded-lg flex items-center gap-2 hover:bg-gray-800 hover:text-white cursor-pointer">
        <Play size={20} fill="black" />
        Play
      </button>
        <button className="mx-2 bg-gray-800 text-white p-4 px-12 text-xl rounded-lg hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;