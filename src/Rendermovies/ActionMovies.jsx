import React from 'react'
import { useEffect,useState } from 'react';
import { API_KEY } from '../Constance/Constance';
import ComicCard from '../Cards/ComicCard';
import { Link } from 'react-router';
export default function ActionMovies() {
    
   const [hoveredCard, setHoveredCard] = useState(null);
          
           
          
            const handleCardHover = (cardId) => {
              setHoveredCard(cardId);
            };
          
            const handleCardLeave = () => {
              setHoveredCard(null);
            };
          
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
                      backdrop_path:each.backdrop_path,
                    }));
                    setActionmovies(fetchedData);
                  }
                };
              
                fnc();
              }, []);
              
        

//   return (
//     <div className=''>
//     <div className="movie-section">
//      <h2 className="section-title"> Action Movies</h2>
//      <div className="movie-scroller">

//        {actionMovies.map((movie,index) => (
       
//          <div className="movie-card"  key={index}>
               
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
//            <p className="movie-title">{movie.title}</p>
//            <p className="toprated-movie-rating">⭐ {movie.vote_average}</p> 
           
          
    
//          </div>
          

//        ))}
       
//      </div>
   
//    </div>
//  </div>
//   )

 return (
    <div className="carousel-container">
        
      <div className="carousel-wrapper">
        
        <span className="carousel-title ">Trending Movies</span>
        
        <div className="carousel-cards">
          {actionMovies? actionMovies.map((comic,index) => (
             <Link to={`/home/movies/${comic.id}`} key={index}>
            
            <ComicCard
              key={comic.id}
              comic={comic}
              isHovered={hoveredCard === comic.id}
              isOtherHovered={hoveredCard !== null}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
             </Link>
          )) : <p>loading</p>}
        </div>
        
       
      </div>
    </div>
  );
}
