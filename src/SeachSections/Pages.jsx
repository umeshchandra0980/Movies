// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function SearchPage() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const title = query.get("title");

//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!title) return;

//     const fetchMovies = async () => {
//       setLoading(true);
//       const res = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=910708f3cdd44608a521cfd40be3cbd&query=${title}`
//       );
//       const data = await res.json();
//       setMovies(data.results || []);
//       setLoading(false);
//     };

//     fetchMovies();
//   }, [title]);

//   return (
//     <div className="grid-wrapper">
//       <h2>Search results for: "{title}"</h2>
//       {loading ? <p>Loading...</p> : (
//         <div className="movie-card">
//           {movies.length > 0 ? (
//             movies.map((movie) => (
//                 <div key={movie.id} className="movie-card">
//                 <img
//                   src={movie.poster}
//                   alt={movie.title}
//                   className="movie-poster"
//                 />
//                 <div className="movie-title">{movie.title}</div>
//               </div>
//             ))
//           ) : (
//             <p>No movies found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
