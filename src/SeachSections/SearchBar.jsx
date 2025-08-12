// import React from 'react'
// import { useLocation } from 'react-router';

// export default function SearchBar() {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const title = query.get("title");

//     return (
//         <> 
//             <div>
//                 hi {title}
//             </div>
//         </>
//     );
// }


// import { useEffect, useState } from "react";
// import { useSearch } from "./SearchContext";

// export default function searchBar() {
//   const { searchQuery } = useSearch();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (!searchQuery.trim()) return;

//     const fetchMovies = async () => {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=4910708f3cdd44608a521cfd40be3cbd&query=${searchQuery}`
//       );
//       const data = await res.json();
//       setResults(data.results || []);
//     };

//     fetchMovies();
//   }, [searchQuery]);

//   return (
//     <div className="results-grid">
//       {results.map((movie) => (
//         <div key={movie.id}>
//           <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
//           <p>{movie.title}</p>
//         </div>
//       ))}
//     </div>
//   );


// const dummyMovies = {

// }
import { useState } from 'react';
import './search.css';
import NewSearchBar from './NewSearchBar'
import SearchResults from './SearchResults';
import Nav from '../Nav/Nav';
export default function SearchBar() {
  // const [search, setSearch] = useState('');
  // console.log("jjj")

  return (
    // <div>
    //   {/* <div className="search-container">
    //     <input
    //       type="search"
    //       className="search-inputs"
    //       placeholder="Movies, shows and more"
    //       value={search}
    //       onChange={(e) => {
    //         console.log("Input value:", e.target.value); // Debugging log
    //         setSearch(e.target.value);
    //       }}
    //     />
    //   </div>

    //   <div className="section-title">Trending in India</div>

    //   <div className="grid-wrapper">
    //     <p>ddd</p>
    //   </div> */}
    // </div>
    <div>
    
  <div>  
  <NewSearchBar/>
  <SearchResults/>
  </div>
    
    </div>
  );
}