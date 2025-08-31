import React from 'react'
import { API_KEY } from '../Constance/Constance';
import { useEffect } from 'react';
import { useState } from 'react';
import ComicCard from '../Cards/ComicCard';
import { Link } from 'react-router';

export default function Orginals() {
 const [originalsMovies,setOrginalsmovies] = useState([])
 const [hoveredCard, setHoveredCard] = useState(null);
        
         
        
 const handleCardHover = (cardId) => {
   setHoveredCard(cardId);
 };

 const handleCardLeave = () => {
   setHoveredCard(null);
 };

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
                   backdrop_path:each.backdrop_path,
                 }));
                 setOrginalsmovies(fetchedData);
               }
             };
           
             fnc();
           }, []);
           
     
  //  return (
 
  //    <div className=''>
  //    <div className="movie-section">
  //     <h2 className="section-title"> Originals</h2>
  //     <div className="movie-scroller">
 
  //       {originalsMovies.map((movie,index) => (
        
  //         <div className="movie-card"  key={index}>
                
  //            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
            
  //           <p className="movie-title">{movie.title}</p>
  //           <p className="toprated-movie-rating">⭐ {movie.vote_average}</p> 
            
           
     
  //         </div>
           
 
  //       ))}
        
  //     </div>
    
  //   </div>
  // </div>
  //  )
  return (
    <div className="carousel-container">
        
      <div className="carousel-wrapper">
        
        <span className="carousel-title ">Orginals</span>
        
        <div className="carousel-cards">
          {originalsMovies? originalsMovies.map((comic,index) => (
            //  <Link to={`/home/movies/${comic.id}`} key={index}>
            
            <ComicCard
              key={comic.id}
              comic={comic}
              isHovered={hoveredCard === comic.id}
              isOtherHovered={hoveredCard !== null}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
              link={`/home/movies/${comic.id}`}
            />
            //  </Link>
          )) : <p>loading</p>}
        </div>
        
       
      </div>
    </div>
  );
 }
 
