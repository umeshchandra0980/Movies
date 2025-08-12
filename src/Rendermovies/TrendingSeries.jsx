import React, { useState,useEffect } from 'react'
import { Link } from 'react-router';
import { API_KEY } from '../Constance/Constance';
export default function TrendingSeries() {
    const [trendingSerieslist,setTrendingSerieslist]=useState([])
    useEffect(() => {
        const fetchTrendingMovies = async () => {
           const response = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`);
            const data = await response.json();
            console.log("trending series data",data)
           if(response.ok) {
          const formatteddata =data.results.map((each) => {
                return {
                    id: each.id,
                    title: each.title,
                    poster_path: each.poster_path,
                    popularity: each.popularity,
                    rating: each.vote_average,
                };
            });
            setTrendingSerieslist(formatteddata);
           }
         
        };
        fetchTrendingMovies();
      }, []);
    
  return (
    <div className=''>
    <div className="movie-section">
        <h2 className="section-title">🔥 Trending Series</h2>
        <div className="movie-scroller">
            {trendingSerieslist.map((movie, index) => (
                <Link to={`/home/movies/${movie.id}`} key={index}>
                    <div className="movie-card">
                        {/* <Trailer id={movie.id} poster={movie.poster_path} title={movie.title} /> */}
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <p className="movie-title">{movie.original_name}</p>
                        <p className="movie-title ">{movie.overview}</p>
                        <p className="toprated-movie-rating">⭐ {movie.rating}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
</div>
  )
}
