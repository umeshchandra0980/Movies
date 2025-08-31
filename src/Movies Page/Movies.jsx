import React, { useEffect, useState } from 'react'
import CinematicBackground from '../Home/CinematicBackground'
import Nav from '../Nav/Nav';
import { API_KEY } from '../Constance/Constance';
import { useWishlist } from '../conText/Whishlist';
import { Link } from 'react-router';
const videos = [
    {
      video: '/Travis.mp4',
      title: "THE Tenet",
      description: "A wizard attempts to capture Death but ends up trapping Dream, the lord of dreams.",
    },
    
      {
        video: '/Interstellar.mp4',
        title: "Interstellar",
        description: "An alien from Krypton becomes Earth's greatest protector while balancing his life as Clark Kent.",
      },
      {
        video: '/Stanger.mp4',
        title: "The Stranger Things",
        description: "In Gotham’s darkest days, Batman uncovers corruption while facing a serial killer known as The Riddler.",
      }
  ];
  
 

export default function Movies() {
  const [moviesShows,setmoviesShows] = useState([])
   const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  
  useEffect(() => {

    const fun = async () => {
      
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=2`)
          
                        const data = await res.json();
//                         const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&primary_release_year=2025&api_key=${API_KEY}`);
// const data = await res.json();
// data.results → array of movie objects in descending popularity

                        console.log("Movies ",data); // data.results is the array
                    
                        if (res.ok) {
                          const fetchedData = data.results.map(each => ({
                            id: each.id,
                            title: each.original_title,
                            poster_path: each.poster_path,
                            release_date: each.release_date,
                            vote_average: each.vote_average,
                            adult: each.adult,
                            original_language: each.original_language,
                            backdrop_path:each.backdrop_path,
                          }));
                          setmoviesShows(fetchedData);
                        }
                      };
                    
                      fun();
    
  },[])


  
  return (
    <div>
      <Nav/>
      <CinematicBackground videos={videos} images={"https://images.hdqwalls.com/wallpapers/tenet-movie-4k-7x.jpg"}/>
      <h2 className="section-heading">🎬 Top Movies</h2>
      <div className='popular-grid-container'>
        
      {moviesShows.map((movie, index) => (
       <div className="card-3d " key={index}>
       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="poster" />
       <div className="rating-badges">
    ⭐ {movie.vote_average.toFixed(1)}
  </div>
       <div className="card-overlay">
         <h3>{movie.title}</h3>
         <p>⭐ {movie.vote_average.toFixed(1)}</p>
         <div className="card-actions">
           <button className="glass-btn" onClick={() => onShowTrailer(movie.id)}><Link to={`/home/movies/${movie.id}`}>🎬 Trailer </Link></button>
           <button className="glass-btn" onClick={() => addToWishlist(movie)}>❤️ Wishlist</button>
         </div>
       </div>
       </div>

))


}
</div>


    </div>
  )
}
