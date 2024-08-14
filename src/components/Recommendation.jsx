import { useState, useEffect } from "react"
import { fetchFromTMDB } from "@/services/apiCalls"
import { IMAGE_URL } from "@/constants/constants"
import { Play, Bookmark } from "lucide-react"

function Recommendation({ endpoint, skipNum }) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetchFromTMDB(endpoint).then((response) => {
      setMovie(response.slice(0, skipNum))
    })
  }, [])

  return (
    <>
      {movie.length && (
        <div className='px-24 mb-14 flex mt-6'>
          <div className='w-1/2'>
            <img src={IMAGE_URL + movie[0].backdrop_path} alt="" />
          </div>
          <div className='w-1/2 flex flex-col justify-center pl-8'>
            <h1 className="font-bold text-3xl mb-2">{movie[0].name}</h1>
            <p className="text-gray-400 mb-2"><span className="text-cyan-500">Series</span> - Sub | Dub</p>
            <p>{movie[0].overview.slice(0, 300)}...</p>
            <div className="flex items-center mt-5 gap-2">
              <button className="bg-orange-600 font-semibold text-black h-10 px-4 flex items-center gap-2"><Play color="black" />START WATCHING E1</button>
              <button className="border-[3px] border-orange-600 font-semibold h-10 px-4 flex items-center gap-2 text-orange-400"><Bookmark strokeWidth={2} color="darkOrange" />ADD TO WATCHLIST</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Recommendation
