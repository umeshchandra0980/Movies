import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ComicCard from '../Cards/ComicCard';

export default function PopularTvShows() {
    const [tvshowslist, setTvshowslist] = useState([]);
    const [tvloders, setTvLoadets] = useState(false);
     const [hoveredCard, setHoveredCard] = useState(null);
            
             
            
     const handleCardHover = (cardId) => {
       setHoveredCard(cardId);
     };
    
     const handleCardLeave = () => {
       setHoveredCard(null);
     };

    useEffect(() => {
        const fetchPopularTvShows = async () => {
            const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=4910708f3cdd44608a521cfd40be3cbd');
            const data = await response.json();
            console.log(data, "tv showwwwwwwwww");
            if (response.ok) {
                const formattedData = data.results.map((each) => {
                    return {
                        id: each.id,
                        name: each.name,
                        poster_path: each.poster_path,
                        country: each.origin_country,
                        rating: each.vote_average,
                        backdrop_path:each.backdrop_path,
                    };
                });
                setTvshowslist(formattedData);
                setTvLoadets(true);
            }
        };
        fetchPopularTvShows();
    }, []);

    // return (

    //     <div className=''>
    //         <div className="movie-section">
    //             <h2 className="section-heading">🔥 Popular Tv Shows</h2>
    //             <div className="movie-scroller">
    //                 {tvloders ? (
    //                     tvshowslist.map((movie, index) => (
    //                         <Link to={`/tvshows/${movie.id}`} key={index}>
    //                             <div className="movie-card">
    //                                 <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.name} />
    //                                 <p className="movie-title">{movie.name}</p>
    //                                 <p className="toprated-movie-rating">Rating: <span>⭐{movie.rating}</span></p>
    //                             </div>
    //                         </Link>
    //                     ))
    //                 ) : (
    //                     <p>is loading</p>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    // );


    return (
        <div className="carousel-container">
            
          <div className="carousel-wrapper">
            
            <span className="carousel-title ">Popular Tv Shows</span>
            
            <div className="carousel-cards">
              { tvshowslist?tvshowslist.map((comic,index) => (
                //  <Link to={`/home/movies/${comic.id}`} key={index}>
                
                <ComicCard
                  key={comic.id}
                  comic={comic}
                  isHovered={hoveredCard === comic.id}
                  isOtherHovered={hoveredCard !== null}
                  onHover={handleCardHover}
                  link={`/home/movies/${comic.id}`}
                  onLeave={handleCardLeave}
                />
                //  </Link>
              )) : <p>loading</p>}
            </div>
            
           
          </div>
        </div>
      );
}