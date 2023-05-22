
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

function App() {

const url_api ="https://api.themoviedb.org/3/movie/popular?api_key=4b47374c7379c4d56a9bda6b7b88b4ed&language=en-US&page=1"; 
const [movies, setMovies] = useState([]);
const search_url = "https://api.themoviedb.org/3/search/movie?api_key=4b47374c7379c4d56a9bda6b7b88b4ed&query";

const [query, setQuery] = useState('');

useEffect(() => {
  fetch(url_api)
  .then(resp => resp.json())
  .then(data => setMovies(data.results))
  
},
[])

const searchMovie = async(e)=>{
  e.preventDefault();
  try{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4b47374c7379c4d56a9bda6b7b88b4ed&query=${query}`
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);

  }catch(e) {
    console.log(e);
  }
}
let navigate = useNavigate();
  return (
    <div className="App">

       <header className='header'>
          <div className='logo'>
             <h1>Movie App</h1>
          </div>

          <div className='search'>
             <form onSubmit={searchMovie}>
               <input
               value={query}
               type="text" 
               placeholder=" Search here..."
               onChange={(e)=>setQuery(e.target.value)}
               />
               <button>Search</button> 
            </form>
          </div>
       </header>

       
    <div className='container' >
     {movies &&  movies.map((movie)=> (

      <div onClick={()=>{navigate(`/${movie.id}`)}} key={movie.id}>
         <MovieCard key={movie.id} {...movie} />
      </div>
    ))}
    </div>
  </div>
  );
}

export default App;
