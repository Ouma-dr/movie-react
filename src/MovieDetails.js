import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './MovieDetails.css';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {

  let navigate = useNavigate();

  const [item, setItem] = useState();

const {id} = useParams();

if(id !== ""){
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4b47374c7379c4d56a9bda6b7b88b4ed&language=en-US`)
  .then(res=>res.json())
  .then(data=>setItem(data))
}

  return (
    <div>
      {
        ((!item)?"":(
         <div>
            <div className='content'>
             <div className='img'>
               <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
              </div> 
               <div className='desc'>
                   <h2 className='title'>Original Title: {item.original_title}</h2>
                   <p> Overview: {item.overview}</p>
                   <div className='details'>
                     <h5 className='text'>Vote average: {item.vote_average}</h5>
                     <h5 className='text'>Status: {item.status}</h5>
                     <h5 className='text'>Vote count: {item.vote_count}</h5>
                   </div>
                   
               </div>
               
              </div>
        </div>))
        
      }
      
        <button onClick={()=>{navigate(`/`)}}>close</button>
      
     
    </div>
  )
}

export default MovieDetails