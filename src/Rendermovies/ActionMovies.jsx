import React from 'react'
import { useEffect,useState } from 'react';
import { API_KEY } from '../Constance/Constance';
export default function ActionMovies() {
    
        const [actionMovies,setActionmovies] = useState([])
         useEffect(() => {
                const fnc = async () => {
                  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`)
    
                  const data = await res.json();
                  console.log("Actions ",data); // data.results is the array
              
                  if (res.ok) {
                    const fetchedData = data.results.map(each => ({
                      id: each.id,
                      title: each.title,
                      poster_path: each.poster_path,
                      release_date: each.release_date,
                      vote_average: each.vote_average,
                      adult: each.adult,
                      original_language: each.original_language,
                    }));
                    setActionmovies(fetchedData);
                  }
                };
              
                fnc();
              }, []);
              
        

  return (
    <div className=''>
    <div className="movie-section">
     <h2 className="section-title"> Action Movies</h2>
     <div className="movie-scroller">

       {actionMovies.map((movie,index) => (
       
         <div className="movie-card"  key={index}>
               
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
           <p className="movie-title">{movie.title}</p>
           <p className="toprated-movie-rating">⭐ {movie.vote_average}</p> 
           
          
    
         </div>
          

       ))}
       
     </div>
   
   </div>
 </div>
  )
}
