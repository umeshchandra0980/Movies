import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../Nav/Nav'
import './new.css'
import ReactPlayer from 'react-player'
export default function NewTralier() {
    const {id} = useParams()
    console.log(id)
     const [trailerId, setTrailerId] = useState(null);
     const [actors,setActors] = useState([])
     const [movietr,srttr] = useState(false)

    
    
        const fetching = () => {
          
          const fnc = async () => {
            const response = await fetch(
              `https://api.themoviedb.org/3/movie/${id}/videos?api_key=4910708f3cdd44608a521cfd40be3cbd&language=en-US`

            );
            console.log(response)
            const data = await response.json();
            const trailer = data.results.find( (v) => v.type === 'Trailer' && v.site === 'YouTube')
            console.log("Movie Trailers:", data);
            const key = trailer?.key?.trim();
          
            if (key) {
                setTrailerId(key);
              }
               else {
                console.warn("❌ No valid trailer for", title);
                setTrailerId(null);
              }
          };
          fnc();
        }
    
useEffect(fetching,[id])

const moviecontent = () => {
const moviesss = async () => {
  // setLoadingMovieContent(true);
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4910708f3cdd44608a521cfd40be3cbd`
  );
  
  const data = await response.json();

  console.log("constant",data)
  if (response.ok) {
    const movie = data;
    const formattedData = {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      
      budget: movie.budget,
      genreNames: movie.genres.map((genre) => genre.name),
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      revenue: movie.revenue,
      runtime: movie.runtime,
      status: movie.status,
      bookingpage: movie.homepage,
      tagline: movie.tagline,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      production_companies: movie.production_companies.map((company) => ({
        logo_path: company.logo_path,
        name: company.name,
        origin_country: company.origin_country,
      })),

    }
    setActors(formattedData)
    srttr(true)
    console.log("data",formattedData)
    console.log("rar",actors)
  }
  


    
  }

  moviesss()
}
useEffect(moviecontent,[])
console.log("logged outside",actors)

  return (
 
      <div  >
        <Nav/>

      
   {/* { movietr? 
 
    <div className="film-preview-card">
    <img
      src={`https://image.tmdb.org/t/p/w500${actors.poster_path}`}
      alt={actors.title}
      className="poster-image"
    />
    <div className="film-info-panel">
      <h2 className="film-title">{actors.title}</h2>
      <p className="tagline-text">“{actors.tagline}”</p>
      <div className="details-grid">
        <p><strong> Released:</strong> {actors.release_date}</p>
        <p><strong> Runtime:</strong> {actors.runtime} min</p>
        <p><strong> Country:</strong> {actors.origin_country?.[0]}</p>
        <p><strong>Language:</strong> {actors.original_language.toUpperCase()}</p>
        <p><strong> Budget:</strong> ${actors.budget.toLocaleString()}</p>
        <p><strong> Revenue:</strong> ${actors.revenue.toLocaleString()}</p>
        <p><strong> Rating:</strong> {actors.vote_average} / 10</p>
      </div>
      <p className="description-blurb">{actors.overview}</p>
    </div>
  </div>
  
    :
    <p>Is loading  </p>
} */}
  {movietr?
  

<div
  className="movie-banner"
  style={{
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${`https://image.tmdb.org/t/p/original${actors.backdrop_path}`})`,
    height:'100vh',
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color:'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',  // top alignment
    justifyContent: 'flex-start',
    zIndex:'0',
     // give spacing from top/left
    boxSizing: 'border-box',


  }}
>

       <div className="banner">
       <div className="content">
         <h1 className="main-title">{actors.original_title}</h1>
         <h2 className="subtitle">The Big Red Dog</h2>
         <div className="info">
           <span>{actors.runtime} mins</span>
           <span className="badge">U/A</span>
           <span>{actors.release_date.slice(0,4)}</span>
         </div>
         <p className="description">
          {actors.overview}
         </p>
         <button className="play-button">Play</button>
       </div>
 
       {/* <div className="details">
         <div className="detail-row">
           <span><strong>Genres:</strong> Comedy</span>
           <span><strong>Languages:</strong> English</span>
           <span><strong>Rating Count:</strong> 63 votes</span>
           <span><strong>Budget:</strong> 1.9 Crores</span>
           <span><strong>Rating Average:</strong> 4.9</span>
           <span><strong>Release Date:</strong> 1994-04-01</span>
         </div> */}
         {/* <div className="brand">ZENFLIX</div> */}
       {/* </div> */}
     </div>
    


</div>
:
<p>Is loading </p>
}
<div className='trailer'> 
        {trailerId  ? (
        <ReactPlayer
        src={`https://www.youtube.com/watch?v=${trailerId}`}
        playing
        loop
        controls={false}
        className="final-moviedetails-video"
        width="100%"
        height="80%"
      />

      
      
      
      )
       : 
       <>
      <div>Is loading </div>
     </>
     }


     </div>
  
    </div>
  )
}



 