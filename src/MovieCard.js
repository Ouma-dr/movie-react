import React from 'react'
import './MovieCard.css';



const MovieCard = ({title, poster_path }) => {
    const img_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    
  return (
    <div className='movieCard'>
       <div className='flex'>
          <img src={img_url} />
          <h4>{title}</h4> 
       </div>
    </div>
  )
}

export default MovieCard