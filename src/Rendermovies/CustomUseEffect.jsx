import React from 'react'
import { useState,useEffect } from 'react';
export default function CustomUseEffect(endpoint) {
     const [moviesList,setMovieslist] = useState([])
     const [lod,setLod]= useState(false)
    
        useEffect(() => {
            if (!endpoint)return
            const fetchPopularMovies = async () => {
            
                    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=4910708f3cdd44608a521cfd40be3cbd`);
                    const data = await response.json();
                    console.log(data)
                    if(response.ok){
                     const formatteddata=  data.results.map((each)=>{
                         return {
                             id:each.id,
                             title:each.title,
                             poster_path:each.poster_path,
                             overview:each.overview,
                            rating:each.vote_average,  
                            backdrop_path:each.backdrop_path,   
                            
                         }
                        })
        
                    setMovieslist(formatteddata);
                    setLod(true)
                    }
            }
        
            fetchPopularMovies();
        }, []);
  return {moviesList,lod}
}
