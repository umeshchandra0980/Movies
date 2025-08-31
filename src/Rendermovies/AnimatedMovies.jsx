import React, { useEffect, useState } from 'react'
import { API_KEY } from '../Constance/Constance';
import TvShowsTrailer from '../Trailes/TvShowsTrailer';
import ComicCard from '../Cards/ComicCard';
import { Link } from 'react-router';
export default function AnimatedMovies() {
   const [hoveredCard, setHoveredCard] = useState(null);
          
           
          
            const handleCardHover = (cardId) => {
              setHoveredCard(cardId);
            };
          
            const handleCardLeave = () => {
              setHoveredCard(null);
            };
          

    const [animatedMovies,setAnimatedmovies] = useState([])
     useEffect(() => {
            const fnc = async () => {
              const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`)

              const data = await res.json();
              console.log("animated",data); // data.results is the array
          
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
                setAnimatedmovies(fetchedData);
              }
            };
          
            fnc();
          }, []);
          
    
          return (
            <div className="carousel-container">
                
              <div className="carousel-wrapper">
                
                <span className="carousel-title ">Animated Movies</span>
                
                <div className="carousel-cards">
                  {animatedMovies? animatedMovies.map((comic,index) => (
                    //  <Link to={`/home/movies/${comic.id}`} key={index}>
                    
                    <ComicCard
                      key={comic.id}
                      comic={comic}
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
