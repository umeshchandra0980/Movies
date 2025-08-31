import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { SearchProvider } from "./Search/SearchProvider";
import NetflixLoader from "./NetflixLoder/NetflixLoader"; // fallback loader
import LoadingAni from "./LoadingAnimation/LoadingAni.jsx";
import SplashScreen from "./SplashScreen/SplashScreen.jsx";
// Lazy imports
const Login = lazy(() => import("./Login/Login"));
const Home = lazy(() => import("./Home/Home"));
const ProviderRoute = lazy(() => import("./Provider/ProviderRoute"));
const NewTralier = lazy(() => import("./Trailes/NewTralier"));
const AllMovies = lazy(() => import("./Rendermovies/AllMovies"));
const SearchResults = lazy(() => import("./SeachSections/SearchResults"));
const TvShowsTrailer = lazy(() => import("./Trailes/TvShowsTrailer"));
const Account = lazy(() => import("./AccountsPage/Account"));
const Tvshowsoflink = lazy(() => import("./TvShows/Tvshowsoflink"));
const Movies = lazy(() => import("./Movies Page/Movies"));
const MovieList = lazy(() => import("./NetflixMovieCardModel/MovieList"));
const WishlistPage = lazy(() => import("./Whislist/WishListPage.jsx"));
const Signup = lazy(() => import("./Login/Signup.jsx"));

function App() {
  return (
    <SearchProvider>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route
            path="/home"
            element={
              <ProviderRoute>
                <Home />
              </ProviderRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProviderRoute>
                <Home />
              </ProviderRoute>
            }
          />
          <Route path="/popular" element={
             <ProviderRoute> 
            <AllMovies />  </ProviderRoute>} />
          
          <Route path="/Tvshows" element={<Tvshowsoflink />} />
          <Route path="/login" element={
            <Login />
            } />
          <Route path="/home/movies/:id" element={<NewTralier />} />
          <Route path="/tvshows/:id" element={<TvShowsTrailer />} />
          <Route path="/Neflix" element={    <NetflixLoader />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/MovieCard" element={<MovieList />} />
          <Route path="/WishList" element={
            <WishlistPage />} />
        </Routes>
      </Suspense>
    </SearchProvider>
  );
}



const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}    // starting position
      animate={{ opacity: 1, x: 0 }}     // enters to normal
      exit={{ opacity: 0, x: -50 }}      // exit animation
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default App
