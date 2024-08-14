import { ChevronRight, SquarePlay } from "lucide-react"
import NewEpisodesCard from "./NewEpisodesCard"
import { useEffect, useState } from "react"
import { fetchFromTMDB } from "@/services/apiCalls"

function NewEpisodes({ endpoint }) {
    const [movies, setMovies] = useState([])
    const [isMore, setIsMore] = useState(false)
    const [moreMovies, setMoreMovies] = useState([])

    useEffect(() => {
        fetchFromTMDB(endpoint).then((response) => {
            setMovies(response.slice(0, 9))
            setMoreMovies(response.slice(9, 18))
        })
    }, [])

    return (
        <div className="px-12 mb-14">
            <div className="flex justify-between items-start">
                <h1 className="mb-4 text-3xl font-bold flex items-center gap-2"><SquarePlay size={30} />New Episodes</h1>
                <p className="mb-2 font-medium text-gray-400 flex items-center gap-2">VIEW RELEASE CALENDER <ChevronRight color="gray" size={22} /></p>
            </div>
            <h1 className="mb-3 text-2xl">Today</h1>
            <hr className="border-gray-500 mb-4" />
            <div className="grid grid-cols-3 gap-4 w-full cursor-pointer mb-3">
                {movies.length && movies.map((movie, index) => (
                    <NewEpisodesCard item={movie} index={index} />
                ))}
            </div>
            {isMore && (
                <div className="grid grid-cols-3 gap-4 w-full cursor-pointer">
                    {moreMovies.length && moreMovies.map((movie, index) => (
                        <NewEpisodesCard item={movie} index={index} />
                    ))}
                </div>
            )}
            <div onClick={() => setIsMore(true)} className={`bg-cyan-950 w-full h-10 mt-10 flex justify-center items-center font-semibold cursor-pointer hover:bg-opacity-75`}>
                <p>{isMore ? "VIEW RELEASE CALENDAR" : "SHOW MORE"}</p>
            </div>
        </div>
    )
}

export default NewEpisodes
