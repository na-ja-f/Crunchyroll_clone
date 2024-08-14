import { IMAGE_URL } from "@/constants/constants"
import { Crown, Play } from "lucide-react"
import { useState } from "react"

function NewEpisodesCard({item, index}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            key={index}
            className={`w-full h-24 flex gap-2 items-center ${hoveredIndex === index ? 'bg-[#23252b]/90' : ''}`}
            onMouseOver={() => setHoveredIndex(index)} // Set the hovered index
            onMouseOut={() => setHoveredIndex(null)}  // Reset the hovered index
        >
            <img
                className="relative h-full w-6/12 flex items-center bg-center bg-cover"
                src={IMAGE_URL + item.backdrop_path}
                alt="image"
            />
            <div className="p-1 pr-3 flex flex-col gap-1 w-full">
                <h1 className="font-semibold text-sm">{item.name}</h1>
                {hoveredIndex === index ? (
                    <p className="text-orange-500 font-semibold mt-4 flex gap-2 items-center">
                        <Play strokeWidth={2} size={20} color="darkOrange" />PLAY E{item.vote_average.toString().slice(0, 1)}
                    </p>
                ) : (
                    <>
                        <p className="text-base font-medium text-gray-400 flex items-center gap-1">
                            <Crown color fill="yellow" size={20} />
                            Episode {item.vote_average.toString().slice(0, 1)}
                        </p>
                        <div className="w-full flex justify-between items-center">
                            <p className="text-base font-medium text-gray-400">Subtitled</p>
                            <p className="text-base font-medium text-cyan-500">
                                {item.vote_average.toString().slice(0, 2)}00pm
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default NewEpisodesCard





