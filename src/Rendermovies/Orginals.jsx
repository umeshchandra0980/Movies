import React from 'react'
import { API_KEY } from '../Constance/Constance';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Orginals() {
 const [originalsMovies,setOrginalsmovies] = useState([])
      useEffect(() => {
             const fnc = async () => {
               const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`)
 
               const data = await res.json();
               console.log("original",data); // data.results is the array
           
               if (res.ok) {
                 const fetchedData = data.results.map(each => ({
                   id: each.id,
                   title: each.name,
                   poster_path: each.poster_path,
                   release_date: each.release_date,
                   vote_average: each.vote_average,
                   adult: each.adult,
                   original_language: each.original_language,
                 }));
                 setOrginalsmovies(fetchedData);
               }
             };
           
             fnc();
           }, []);
           
     
   return (
 
     <div className=''>
     <div className="movie-section">
      <h2 className="section-title"> Originals</h2>
      <div className="movie-scroller">
 
        {originalsMovies.map((movie,index) => (
        
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
 
