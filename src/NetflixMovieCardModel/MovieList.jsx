import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { API_KEY } from "../Constance/Constance";
export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
    

      // Get genres list
      const genreRes = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      const genreData = await genreRes.json();
      const genreMap = {};
      genreData.genres.forEach(g => genreMap[g.id] = g.name);

      // Get movies
      const movieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
      const movieData = await movieRes.json();

      const fetchedData = movieData.results.map(each => ({
        id: each.id,
        title: each.title,
        poster_path: each.poster_path,
        release_date: each.release_date,
        backdrop_path:each.backdrop_path,
        vote_average: each.vote_average,
        adult: each.adult,
        original_language: each.original_language,
        genres: each.genre_ids.map(id => genreMap[id]) // ✅ Map IDs to names
      }));

      setMovies(fetchedData);
    }

    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
