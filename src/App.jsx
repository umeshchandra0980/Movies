import Login from "./Login/Login"
import Home from "./Home/Home"
import { Route,Routes } from "react-router"
import ProviderRoute from "./Provider/ProviderRoute"
import NewTralier from "./Trailes/NewTralier"
import AllMovies from "./Rendermovies/AllMovies"
import SearchSections from './SeachSections/searchBar'

// import SearchProvider from "./conText/SearchProvider"
import Nav from "./Nav/Nav"
import TvShowsTrailer from "./Trailes/TvShowsTrailer"
// import SearchPage from "./SeachSections/Pages"
import { useState } from "react"
import { SearchProvider } from "./Search/SearchProvider"
import SearchResults from "./SeachSections/SearchResults"
import SplashScreen from "./SplashScreen/SplashScreen"
import NetflixLoader from "./NetflixLoder/NetflixLoader"
import LoadingAni from "./LoadingAnimation/LoadingAni"
import Welcome from "./Welcome Animation/Welcome"
import Account from "./AccountsPage/Account"
import Tvshowsoflink from "./TvShows/Tvshowsoflink"
import Movies from "./Movies Page/Movies"
import MovieHoverCard from "./MovieHover/MovieHoverCard"
import Actors from "./ActorsAndAll/Actors"
import VideoSequence from "./FramerMotilons/VideoSequence"
function App() {

  
  

  return (
    <>
    
 <SearchProvider> 

      <Routes>


        <Route path="/home" element={
          <ProviderRoute>    <Home/>    </ProviderRoute>
       }></Route>
        <Route path="/" element={<Home/>}></Route>
       
         {/* {<Route path="/search" element={<SearchResults/>}></Route> } */}
        <Route path="/popular" element={<AllMovies/>}></Route>
        <Route path="/Tvshows" element={<Tvshowsoflink/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/home/movies/:id" element={<NewTralier/>}></Route>
        <Route path="/tvshows/:id" element={<TvShowsTrailer/>}></Route>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/Neflix" element={<NetflixLoader/>} ></Route>
        {/* <Route path="/TvShows" element={}></Route> */}
        <Route path="wel" element={<MovieHoverCard/>}></Route>
        {/* <Route path="/3" element={<LoadingAni/>}></Route> */}
        <Route path="/Acounts" element={<Account/>}></Route>
        <Route path="/Movies" element={<Movies/>}></Route>
        <Route path="/actors" element={<Actors/>}></Route>
        <Route path="/WishList" element={<VideoSequence/>}></Route>

      </Routes>
      </SearchProvider>
    </>
  )
}

export default App
