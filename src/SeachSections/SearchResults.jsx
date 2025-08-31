// SearchResults.jsx
import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader'
import './search.css'
import { useSearch } from '../Search/SearchProvider';
import { API_KEY } from '../Constance/Constance';
import Nav from '../Nav/Nav';
import { Loader } from 'lucide-react';
import Radio from '../Loders/Radio';
import LoadingAni from '../LoadingAnimation/LoadingAni';
export default function SearchResults() {
  const {searchQuery} = useSearch()
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');
  const [results, setResults] = useState([]);
  const [isSearching,setIsSearching] = useState(false)

  // https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false&certification_country=US&certification.lte=PG-13
  // `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`4
 
  useEffect(() => {
    if (!query) return;
  
    const fetchResults = async () => {
    //  const res = await fetch(`https://www.omdbapi.com/?apikey=a4be75e1&s=${query}&type=movie`)
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`)
        // const res = await fetch(`http://localhost:5000/movies/search`)

       
      const data = await res.json();
      console.log("movies api searched",data)
    

    //  if (data.Search.length >1){
    //   const safeMovies = data.Search.filter(movie => {
    //     const unsafeRatings = ['R', 'NC-17', 'X', 'N/A'];
    //     const unsafeGenres = ['Adult', 'Erotic', 'XXX'];
    //     const lowerGenres = movie.Genre?.toLowerCase() || '';
    //     const lowerPlot = movie.Plot?.toLowerCase() || '';
      
    //     return !unsafeRatings.includes(movie.Rated) &&
    //            !unsafeGenres.some(g => lowerGenres.includes(g.toLowerCase())) &&
    //            !lowerPlot.includes('seduction') &&
    //            !lowerPlot.includes('affair') &&
    //            !lowerPlot.includes('explicit');
    //   });
      
      
    //   setResults(safeMovies || []);
    //   console.log(safeMovies)
    //   setIsSearching(true)
    //  }
    if(res.ok){

     const safeMovies = data.results.filter(movie => ({
      title:movie.title,
      Poster:movie.poster_path,

     }
    )
    )
    if (safeMovies.length > 0) { 
      setResults(safeMovies || [])
      setIsSearching(true)
    }
    else{
      setIsSearching(false)
    }
  }

   
     else{
      setIsSearching(false)
     }
    };

    fetchResults();
  }, [query]);
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const res = await fetch(`https://www.omdbapi.com/?apikey=a4be75e1&s=${query}&type=movie&page=1`);
  //     const data = await res.json();
  
  //     if (data.Response === 'True') {
  //       const fullMovies = await Promise.all(
  //         data.Search.map(async (item) => {
  //           const full = await fetch(`https://www.omdbapi.com/?apikey=a4be75e1&i=${item.imdbID}`);
  //           return await full.json();
  //         })
  //       );
  //       const safe = fullMovies.filter(isSafe);
  //       setResults(safe);
  //     } else {
  //       console.error(data.Error); // Too many results, etc.
  //     }
  //   };
  
  //   fetchMovies();
  // }, [query]);
  

  console.warn("came here but not loading")
  // console.log(query,"ddddddd")
  return (
    
    <div >
    
      {isSearching?
  

        <div className="search-page">
      <h2 className="search-title">Shown Results </h2>
      <div className="poster-grid">
        {results.map(poster => (
         poster.poster_path != null ? <div className="poster-card" key={poster.id}>
            {/* <img src={poster.Poster} alt={poster.title} /> */}
            <Link to={`/home/movies/${poster.id}`} key={poster.id}> 
           <img  src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}alt={poster.title}  />
           </Link>
          </div>
          :
          ''
        
        ))}
      </div>
    </div>
    
      :
  //     <div className='search-results'>        <img src="https://res.cloudinary.com/dzrn93bir/image/upload/v1752675301/no-search-found-flat-illustration-concept-vector-removebg-preview_ihc0i9.png"/>
  // </div>
      <LoadingAni/>
      }
    </div>
  );
}
