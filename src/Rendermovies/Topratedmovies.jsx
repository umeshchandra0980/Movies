import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';
import { Clapperboard, Flame, Film, Tv, Ghost, Star, Rocket, TrendingUp } from 'lucide-react'
export default function Topratedmovies() {
    const [topratedMovies,setTopratedMovies] = useState([])

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
                 votes: each.vote_count
                 };
             });
             setTopratedMovies(formattedData);
         }
    }
     

    fetchTopRatedMovies();
},[])



return (
  <div className=''>
      <div className="movie-section">
      <h2 className="section-heading">🎬 Top Rated Movies</h2>
          <div className="movie-scroller">
              {topratedMovies.map((movie, index) => (
                  <Link to={`/home/movies/${movie.id}`} key={index}>
                      <div className="movie-card">
                          {/* <Trailer id={movie.id} poster={movie.poster_path} title={movie.title} /> */}
                          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                          <div className="rating-badge">
                          <span style={{ color: "white",marginBottom:"4px" }}>☆</span>

                          {movie.rating.toFixed(1)}
                                </div>
                          <p className="movie-title">{movie.title}</p>
                          {/* <p className="toprated-movie-rating">Rating: <span>⭐{movie.rating}</span></p> */}
                      </div>
                  </Link>
              ))}
          </div>
      </div>
  </div>
);
}
