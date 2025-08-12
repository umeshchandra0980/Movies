import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactPlayer from 'react-player'
export default function TvShowsTrailer() {
    const {id} = useParams()
    console.log(id)
    const [tvshows,setTvshows] = useState('')
    const[tvData,setTvData]=useState([])
    const[v,sv] = useState(false)

    useEffect(() => {
        const fetchingtvshows = async () =>{
            const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=4910708f3cdd44608a521cfd40be3cbd`)
            const data = await res.json()
            console.log("video data",data)

            // const trailer = data.results.find( (v) => v.type === 'Trailer' && v.site === 'YouTube')
         const videoKey = data.results?.[0]?.key;
            console.log("Movie Trailers:", data);
            console.log("key data",videoKey)
            const key = videoKey;
            console.log(key)
          
            if (key) {
                setTvshows(videoKey);
              }
               else {
                console.warn("❌ No valid trailer for", tvshows);
                setTvshows(null);
              }
        }
        fetchingtvshows()
    },[])



    
    const moviecontents = () => {
    const moviesss = async () => {
      // setLoadingMovieContent(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=4910708f3cdd44608a521cfd40be3cbd` );
      
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
        setTvData(formattedData)
        sv(true)
      
        console.log("data",formattedData)
        console.log("rar",tvData)
      }
      
      }
    
      moviesss()
    }
    useEffect(moviecontents,[])

  return (
    <div>
        
        <div  >

{ v ? 

<div className="film-preview-card">
<img
src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
alt={tvData.title}
className="poster-image"
/>
<div className="film-info-panel">
<h2 className="film-title">{tvData.title}</h2>
<p className="tagline-text">“{tvData.tagline}”</p>
<div className="details-grid">
 <p><strong> Released:</strong> {tvData.release_date}</p>
 <p><strong> Runtime:</strong> {tvData.runtime} min</p>
 <p><strong> Country:</strong> {tvData.origin_country?.[0]}</p>
 <p><strong>Language:</strong> {tvData.original_language.toUpperCase()}</p>
 {/* <p><strong> Budget:</strong> ${tvData.budget.toLocaleString()}</p> */}
 <p><strong> Rating:</strong> {tvData.vote_average} / 10</p>
</div>
<p className="description-blurb">{tvData.overview}</p>
</div>
</div>

:
<p>Is loading  </p>
}

<div className='trailer'> 
 {tvshows  ? (
 <ReactPlayer
 src={`https://www.youtube.com/watch?v=${tvshows}`}
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
    </div>
  )
}
