import React, { useEffect,useState } from 'react'
import YouTube from 'react-youtube';


export default function Trailer ({id,title,poster}) {
    const id1 = id;
    const [trailerId, setTrailerId] = useState(null);
    const [hovered, setHovered] = useState(false);


    const fetching = () => {
        if (!hovered) return;
      const fnc = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id1}/videos?api_key=4910708f3cdd44608a521cfd40be3cbd&language=en-US`
        );
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


    useEffect(fetching,[id1,hovered])
  return (
    <div  
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} >
     {trailerId && hovered  ? (
        <YouTube
          videoId={trailerId}
          opts={{
            height: '300',
            width: '100%',
            playerVars: { autoplay: 1, mute: 1 },
          }}
        />
      )
       : 
      <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
        className="poster"
      />
      <p className="title">{title}</p>
    </>
    }
    
    </div>
  )
}
