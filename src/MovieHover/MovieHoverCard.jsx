import { useState } from "react";
import "./MovieHoverCard.css";

export default function MovieHoverCard({ movie }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="poster" src={movie.poster} alt={movie.title} />
      
      {hovered && (
        <div className="hover-modal">
          <video
            src={movie.trailer}
            autoPlay
            muted
            loop
            className="trailer-preview"
          />
          <div className="modal-content">
            <h1 className="modal-title">{movie.title}</h1>
            <div className="modal-buttons">
              <button className="play">▶ Play</button>
              <button className="add">+ Watchlist</button>
            </div>
            <div className="meta">
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="rating">⭐ {movie.rating}</span>
            </div>
            <p className="description">{movie.description}</p>
            <div className="genres">{movie.genres.join(" • ")}</div>
            <div className="cast">🎭 {movie.cast.join(", ")}</div>
          </div>
        </div>
      )}
    </div>
  );
}
