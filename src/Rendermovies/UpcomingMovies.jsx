import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Upcoming.css'
import { API_KEY } from '../Constance/Constance'
import { Link } from 'react-router'
export default function UpcomingMovies() {
    const [upcomingMovies,setUpcomingMovies]= useState([])
    // https://api.themoviedb.org/3/movie/upcoming?api_key=4910708f3cdd44608a521cfd40be3cbd
    useEffect( () => {
       const renderDetailes = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`)
        const data = await response.json()
        console.log("upcoming movies",data)
        if (response.ok){
         const totalData = data.results.map((each) => {
        return  {
            id:each.id,
            title:each.title,
            poster_path:each.poster_path,
            release_date:each.release_date,
            rating:each.vote_average,
            backdrop_path:each.backdrop_path,
         }
        } )
        setUpcomingMovies(totalData)
    }
       }
       renderDetailes()
    },[])
  return (
    <div className="upcoming-wrapper">
      <h2 className="upcoming-title">🎞 Upcoming Releases</h2>
      <div className="upcoming-scroll">
        {upcomingMovies.map((movie, index) => (
          
          <motion.div
            className="upcoming-card"
            key={movie.id}
            initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
         <Link to={`movies/${movie.id}`}>   
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="upcoming-image"
            />
                <div className="upcoming-info">
            <h4>{movie.title}</h4>
            <p className="movie-rating">⭐ {movie.rating}</p>
            <p className="movie-date">📅 {movie.release_date}</p>
                    </div>
             </Link>

          </motion.div>
        ))}
      </div>
    </div>
  )
}
