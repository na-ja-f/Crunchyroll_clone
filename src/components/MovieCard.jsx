import React, { useEffect, useState } from 'react'
import { IMAGE_URL } from '@/constants/constants'
import { Star, Play, Bookmark, Plus } from 'lucide-react'

function MovieCard({ data }) {
  const [isHover, setIsHover] = useState(false)
  console.log('recieved', data);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className='relative w-[175px] h-[350px] lg:w-[255px] lg:h-[450px] flex items-center bg-center bg-cover'
      style={{ backgroundImage: `url(${IMAGE_URL + data.backdrop_path})` }}>
      {isHover ? (
        <div className='absolute cursor-pointer bg-[#23252b]/90 h-full w-full bottom-0 font-semibold p-2'>
          <h1 className='font-semibold text-md'>{data.name}</h1>
          <p className='font-semibold text-sm mt-2 flex gap-2 items-center'>{data.vote_average.toString().slice(0, 3)}<Star size={15} fill='white' />({data.vote_average})</p>
          <p className='font-semibold text-sm mt-2 text-gray-400'>1 seoson <br /> 12 episodes</p>
          <p className='font-semibold text-sm mt-2'>{data.overview.slice(0, 300)}...</p>
          <div className='absolute bottom-0 flex gap-3 mb-3'>
            <Play color='darkOrange' size={23} strokeWidth={2} />
            <Bookmark color='darkOrange' size={23} strokeWidth={2} />
            <Plus color='darkOrange' size={23} strokeWidth={2} />
          </div>
        </div>

      ) : (
        <div className='absolute bg-black h-20 pt-2 w-full bottom-0 text-sm font-semibold'>
          {data.name.slice(0, 39)}
          <p className='font-normal text-gray-500 mt-1'>Sub | Dub</p>
        </div>
      )
      }
    </div >
  )
}

export default MovieCard
