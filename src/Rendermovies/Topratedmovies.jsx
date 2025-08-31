import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';
import ComicCard from '../Cards/ComicCard';

import { Clapperboard, Flame, Film, Tv, Ghost, Star, Rocket, TrendingUp } from 'lucide-react'
import SkeletonPoster from '../Skelton/SkeletonPoster';
export default function Topratedmovies() {
    const [topratedMovies,setTopratedMovies] = useState([])
    const [hoveredCard, setHoveredCard] = useState(null);
    
    
     
    
      const handleCardHover = (cardId) => {
        setHoveredCard(cardId);
      };
    
      const handleCardLeave = () => {
        setHoveredCard(null);
      };
    

    useEffect(() => {
         const fetchTopRatedMovies = async () => {
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4910708f3cdd44608a521cfd40be3cbd');
          const data = await response.json();
       
          console.log("Top rated movies",data)
         if(response.ok) {
             const formattedData = data.results.map((each) => {
                 return {
                 id: each.id,
                 title: each.title,
                 poster_path: each.poster_path,
                 rating: each.vote_average,
                 votes: each.vote_count,
                 backdrop_path:each.backdrop_path,
                 };
             });
             setTopratedMovies(formattedData);
         }
    }
     

    fetchTopRatedMovies();
},[])



// return (

//   <div className=''>
//       <div className="movie-section">
//       <h2 className="section-heading">🎬 Top Rated Movies</h2>
//           <div className="movie-scroller">
//               {topratedMovies.map((movie, index) => (
//                   <Link to={`/home/movies/${movie.id}`} key={index}>
                    
//                   </Link>
//               ))}
//           </div>
//       </div>
//   </div>
// );
return (
    <div className="carousel-container">
        
      <div className="carousel-wrapper">
        
        <span className="carousel-title ">Top Rated all Time</span>
        
        <div className="carousel-cards">
          {topratedMovies.length > 1? topratedMovies.map((comic,index) => (
            //  <Link to={`/home/movies/${comic.id}`} key={index}>
            
            <ComicCard
              key={comic.id}
              comic={comic}
              link={`/home/movies/${comic.id}`}
              isHovered={hoveredCard === comic.id}
              isOtherHovered={hoveredCard !== null}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
            //  </Link>
          )) : <SkeletonPoster/>}
        </div>
        
       
      </div>
    </div>
  );

}
