import React from 'react'
import Nav from '../Nav/Nav'
import CinematicBackground from '../Home/CinematicBackground'
import './Tvshowsoflink.css';
import { useState,useEffect } from 'react';
const videos = [
  {
    video: '/Dark.mp4',
    title: "THE Dark",
    description: "A wizard attempts to capture Death but ends up trapping Dream, the lord of dreams.",
  },
  
    {
      video: '/GOT.mp4',
      title: "Game of Throns",
      description: "An alien from Krypton becomes Earth's greatest protector while balancing his life as Clark Kent.",
    },
    {
      video: '/Stanger.mp4',
      title: "The Stranger Things",
      description: "In Gotham’s darkest days, Batman uncovers corruption while facing a serial killer known as The Riddler.",
    }
];

export default function Tvshowsoflink() {
   const [tVSHOWS,settVSHOWS] = useState([])

      useEffect(() => {
          const fnc = async () => {
            const res = await fetch(
              'https://api.themoviedb.org/3/tv/popular?api_key=4910708f3cdd44608a521cfd40be3cbd'
            );
            const data = await res.json();
            console.log(data,"tv shows"); // data.results is the array
        
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
              settVSHOWS(fetchedData);
            }
          };
        
          fnc(); 
        }, []);
  return (
    <div>
        <Nav/>
      <CinematicBackground  videos={videos} images={"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/18fb1af582b2294bad04613e0727c01bf1a93e118630708805adcf0854826125._SX1080_.jpg"} />
      <h2 className="section-heading">🎬 Top Rated Movies</h2>
      <div className='popular-grid-container'>
        
      {tVSHOWS.length >1?tVSHOWS.map((movie, index) => (
       <div className="card-3d " key={index}>
       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster" />
       <div className="rating-badges">
    ⭐ {movie.vote_average.toFixed(1)}
  </div>
       <div className="card-overlay">
         <h3>{movie.title}</h3>
         <p>⭐ {movie.vote_average.toFixed(1)}</p>
         <div className="card-actions">
           <button className="glass-btn" onClick={() => onShowTrailer(movie.id)}>🎬 Trailer</button>
           <button className="glass-btn">❤️ Wishlist</button>
         </div>
       </div>
     </div>
    
     
      ))
      :<p>loading</p>


}
</div>
    </div>
  )
}
