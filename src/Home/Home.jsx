import Nav from "../Nav/Nav"
import PopularMovies from "../Rendermovies/PopularMovies"
import CinematicBackground from "./CinematicBackground"
import './index.css'
import Topratedmovies from "../Rendermovies/Topratedmovies"
import TrendingMovies from "../Rendermovies/TrendingMovies"
import PopularTvShows from "../Rendermovies/PopularTvShows"
import UpcomingMovies from "../Rendermovies/UpcomingMovies"
import { useRef, useState } from "react"
import AnimatedMovies from "../Rendermovies/AnimatedMovies"
import Footer from "../Footer/Footer"
import { useEffect } from "react"
import { useSearch } from '../Search/SearchProvider';
import SearchResults from "../SeachSections/SearchResults"
import { useNavigate,useLocation } from "react-router"
import { useSearchParams } from 'react-router';
import TrendingSeries from "../Rendermovies/TrendingSeries"
import HorrorMovies from "../Rendermovies/HorrorMovies"
import ActionMovies from "../Rendermovies/ActionMovies"
import Orginals from "../Rendermovies/Orginals"

export default function Home() {

// const [searchQuery,setSearchQuery]=useState('')
const { searchQuery } = useSearch();
// const location = useLocation();
// const navigate = useNavigate();

// useEffect(() => {
//   const debounceTimeout = setTimeout(() => {
//     if (searchQuery.trim() === "" && location.pathname !== "/home") {
//       navigate("/home"); // Navigate to the default route only if not already on /home
//     }
//   }, 300); // Delay navigation by 300ms

//   return () => clearTimeout(debounceTimeout); // Cleanup the timeout on component unmount or query change
// }, [searchQuery, navigate, location.pathname]);

const [params] = useSearchParams();
const query = params.get("query") || "";





const videos = [
  {
    video: '/Joker.mp4',
    title: "THE JOKER",
    description: "A wizard attempts to capture Death but ends up trapping Dream, the lord of dreams.",
  },
  
    {
      video: '/Superman.mp4',
      title: "Superman",
      description: "An alien from Krypton becomes Earth's greatest protector while balancing his life as Clark Kent.",
    },
    {
      video: '/TheBatman.mp4',
      title: "The Batman",
      description: "In Gotham’s darkest days, Batman uncovers corruption while facing a serial killer known as The Riddler.",
    }
];

  return (

    <div>
       <Nav/>
    {/* <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}

    {searchQuery.trim() === "" ? (
        <div>
        
       
        <CinematicBackground videos={videos} images={"https://cdn.dribbble.com/users/2202732/screenshots/7059899/joker-movie_artwork_dribbble-min_4x.jpg"}/>
        
        <Topratedmovies/>
        <PopularMovies/>
       
        <TrendingMovies/>
        <PopularTvShows/>
        <AnimatedMovies/>
        <ActionMovies/>
        <TrendingSeries/>
        <HorrorMovies/>
        <Orginals/>
        <UpcomingMovies/>
        <Footer/>
       
    
        
      
        
      
         
      </div>
    ) : (
      <SearchResults searchQuery={searchQuery} />
    )}
  </div>
  
  )
}
