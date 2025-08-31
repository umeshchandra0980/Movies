import React, { useState,useEffect } from 'react'
import { Link } from 'react-router';
import ComicCard from '../Cards/ComicCard';

export default function TrendingMovies() {
    const [trendingMovieslist,setTrendingMovieslist]=useState([])
    const [hoveredCard, setHoveredCard] = useState(null);
        
         
        
          const handleCardHover = (cardId) => {
            setHoveredCard(cardId);
          };
        
          const handleCardLeave = () => {
            setHoveredCard(null);
          };
        
    useEffect(() => {
        const fetchTrendingMovies = async () => {
           const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4910708f3cdd44608a521cfd40be3cbd');
            const data = await response.json();
            console.log("trending data",data)
           if(response.ok) {
          const formatteddata =data.results.map((each) => {
                return {
                    id: each.id,
                    title: each.title,
                    poster_path: each.poster_path,
                    popularity: each.popularity,
                    rating: each.vote_average,
                    backdrop_path:each.backdrop_path,
                };
            });
            setTrendingMovieslist(formatteddata);
           }
         
        };
        fetchTrendingMovies();
      }, []);
    
//   return (
//     <div className=''>
//     <div className="movie-section">
//         <h2 className="section-title">🔥 Trending Moving</h2>
//         <div className="movie-scroller">
//             {trendingMovieslist.map((movie, index) => (
//                 <Link to={`/home/movies/${movie.id}`} key={index}>
//                     <div className="movie-card">
//                         {/* <Trailer id={movie.id} poster={movie.poster_path} title={movie.title} /> */}
//                         <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
//                         <p className="movie-title">{movie.title}</p>
//                         <div className="rating-badge">
//                           <span style={{ color: "white",marginBottom:"4px" }}>☆</span>

//                           {movie.rating.toFixed(1)}
//                                 </div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     </div>
// </div>
//   )

  return (
    <div className="carousel-container">
        
      <div className="carousel-wrapper">
        
        <span className="carousel-title ">Trending Movies</span>
        
        <div className="carousel-cards">
          {trendingMovieslist? trendingMovieslist.map((comic,index) => (
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
          )) : <p>loading</p>}
        </div>
        
       
      </div>
    </div>
  );

}
