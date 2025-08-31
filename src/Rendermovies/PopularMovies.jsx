import React, { useState } from 'react'
import "./Trending.css"
import { useEffect } from 'react';
import { Link } from 'react-router';
// import Trailer from '../Trailes/Trailer';
import CustomUseEffect from './CustomUseEffect';
import ComicCard from '../Cards/ComicCard';

export default function PopularMovies() {
    // const [moviesList,setMovieslist] = useState([])

    // useEffect(() => {
    //     const fetchPopularMovies = async () => {
        
    //             const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4910708f3cdd44608a521cfd40be3cbd');
    //             const data = await response.json();
    //             console.log(data)
    //             if(response.ok){
    //              const formatteddata=  data.results.map((each)=>{
    //                  return {
    //                      id:each.id,
    //                      title:each.title,
    //                      poster_path:each.poster_path,
    //                      overview:each.overview,
    //                     rating:each.vote_average,     
                        
    //                  }
    //                 })
    
    //             setMovieslist(formatteddata);
    //             }
    //     }
    
    //     fetchPopularMovies();
    // }, []);
const {moviesList,lod}=CustomUseEffect('movie/popular')
 const [hoveredCard, setHoveredCard] = useState(null);
        
         
        
 const handleCardHover = (cardId) => {
   setHoveredCard(cardId);
 };

 const handleCardLeave = () => {
   setHoveredCard(null);
 };
    
  // return (
  //   <div className=''>
  //    <div className="movie-section">
  //     <h2 className="section-heading">🔥 Popular Movies</h2>
  //     <div className="movie-scroller">
  //     {lod ?
  //       moviesList.map((movie,index) => (
  //        <Link to={`/home/movies/${movie.id}`} key={index}  >   
  //         <div className="movie-card" >
  //                {/* <Trailer id={movie.id} poster={movie.poster_path} title={movie.title} /> */}
  //           <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
  //           <p className="movie-title">{movie.title}</p>
  //           <div className="rating-badge">
  //                         <span style={{ color: "white",marginBottom:"4px" }}>☆</span>

  //                         {movie.rating.toFixed(1)}
  //                               </div>
           

  //         </div>
  //         </Link>   

  //       )):
  //       <p>is Loding</p>
  //     }
        
  //     </div>
    
  //   </div>

  //    </div>
  // )
  return (
    <div className="carousel-container">
        
      <div className="carousel-wrapper">
        
        <span className="carousel-title">Popular Movies</span>
        
        <div className="carousel-cards">
          {moviesList? moviesList.map((comic,index) => (
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
