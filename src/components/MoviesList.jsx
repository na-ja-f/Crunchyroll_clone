import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import { fetchFromTMDB } from '@/services/apiCalls'

function MoviesList({ endpoint, listHeader, listCaption }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchFromTMDB(endpoint).then((response) => {
      setMovies(response.reverse())
    })
  }, [])


  return (
    <div className='relative ml-12 pb-14'>
      <h1 className='mb-4 text-3xl font-bold'>{listHeader}</h1>
      {listCaption && <p className='mb-4 -mt-2 text-base font-medium text-gray-400'>{listCaption}</p>}
      <div className='flex overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {movies.length && movies.map((movie, index) => (
          <div className='flex mr-7' key={index}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesList
