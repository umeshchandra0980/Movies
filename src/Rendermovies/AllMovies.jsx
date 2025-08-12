import { easeIn } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './Top.css'
import Nav from '../Nav/Nav'
import CinematicBackground from '../Home/CinematicBackground'
export default function AllMovies() {

    const [allmovies,setAllmovies] = useState([])
    

    useEffect(() => {
        const fnc = async () => {
          const res = await fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=4910708f3cdd44608a521cfd40be3cbd&include_adult=false&sort_by=popularity.desc&page=1'
          );
          const data = await res.json();
          console.log(data); // data.results is the array
      
          if (res.ok) {
            const fetchedData = data.results.map(each => ({
              id: each.id,
              title: each.title,
              poster_path: each.poster_path,
              release_date: each.release_date,
              vote_average: each.vote_average,
              adult: each.adult,
              original_language: each.original_language,
            }));
            setAllmovies(fetchedData);
          }
        };
      
        fnc(); 
      }, []);

      const videos = [
        {
          video: '/Joker.mp4',
          title: "THE Joker",
          description: "A wizard attempts to capture Death but ends up trapping Dream, the lord of dreams.",
        },
        
          {
            video: '/Superman.mp4',
            title: "Superman",
            description: "An alien from Krypton becomes Earth's greatest protector while balancing his life as Clark Kent.",
          },
          {
            video: '/The Batman.mp4',
            title: "The Batman",
            description: "In Gotham’s darkest days, Batman uncovers corruption while facing a serial killer known as The Riddler.",
          }
      ];
      
  return (
    <>
    <Nav/>
       <CinematicBackground videos={videos}/>


    <div className="top-rated-section">
  <h2 className="section-heading">🎬 Popular Movies</h2>
  <div className="movie-wall">
    {allmovies.map(movie => (
      <div className="movie-box" key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="movie-info">
          <h4>{movie.title}</h4>
          {/* <div className="rating-bar">
            <span className="star">⭐</span>
            <span> {movie.vote_average} / 10</span>
           
          </div> */}
        </div>
      </div>
    ))}
  </div>
</div>

        
    </>
  )
}


{/* <div className="popular-grid-container">
      {allmovies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>🎬 {movie.release_date}</p>
            <p>⭐ {movie.vote_average} / 10</p>
            {movie.adult && <p className="adult-badge">🔞 Adult</p>}
          </div>
        </div>
      ))}
    </div> */}