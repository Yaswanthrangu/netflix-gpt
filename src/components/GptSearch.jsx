import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div>
        <div className="fixed -z-10">
          <img className="object-cover h-screen md:w-screen" src={BG_URL} alt="bg" />
        </div>
        <div className="">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  )
}

export default GptSearch