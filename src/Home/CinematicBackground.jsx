import { useState, useEffect, useRef } from 'react';
import './CinematicBackground.css';



export default function CinematicBackground({videos,images}) {
  console.log(videos)
  const [index, setIndex] = useState(0);
  const[isMuted,setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const[imgTimer,setImgTimer] = useState(false)
  useEffect(() => {
    console.log("worked effect")
    const time = setInterval(() => {
      setImgTimer(true)
         },2000)
    return () => clearInterval(time)

  })

  useEffect(() => {
    console.log("worked effect 2")
   
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 30000);
    return () => clearInterval(timer);

  }, []);

  return (
    <div className="video-hero">
  
      <div>
        {imgTimer?
      <video
        key={index}      
        src={videos[index].video}
        autoPlay={true}
        muted={isMuted}
        loop
        playsInline
        className="video-hero"
      />:<div className='video-background-image'>  
      <img src={images} className='joker-image' />
      </div>}
      
      <div className='overlay'></div>
       <div className="hero-content">
      <h4>N SERIES</h4>
      <h1 className="cine-title-backround">{videos[index].title}</h1>
      <p>{videos[index].description}</p>
      <div className="buttons">
        <button className="play-btn">▶ Play</button>
        <button className="info-btn">ℹ More Info</button>
      </div>
    </div>
  <button
  className="mute-toggle"
  onClick={() => {
    setIsMuted(prev => !prev);
    videoRef.current.muted = !videoRef.current.muted;
  }}
>
  {isMuted ? '🔇 Unmute' : '🔊 Mute'}
</button>
</div> 



     
    </div>
  );
}
