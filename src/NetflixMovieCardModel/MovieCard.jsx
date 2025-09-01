import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./movieCard.css";
import Radio from "../Loders/Radio";

export default function MovieCard({ movie }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <motion.div
        className="movie-thumb"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.1,
                opacity: 0,
                y: 50
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1] // smooth cubic-bezier easing
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* BACKDROP */}
              <div
                className="modal-backdrop"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}
              >
                <div className="modal-top-overlay">
                  <h1>{movie.title}</h1>
                  <div className="buttons">
                    <button className="play-btn">▶ Play</button>
                    <button className="add-btn">＋</button>
                    <button className="like-btn">👍</button>
                    <Radio/>
        
                
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="modal-details">
                <div className="meta">
                  <span className="year">{movie.release_date?.slice(0, 4)}</span>
                  <span className="seasons">5 Seasons</span>
                  <span className="age-rating">U/A 16+</span>
                  <span className="rating">{movie.vote_average} ★</span>
                </div>
                <p className="description">{movie.overview}</p>

                <p>
                  <strong>Genres:</strong>{" "}
                  {movie.genres?.join(", ")}
                </p>
                <p>
                  <strong>Language:</strong> {movie.original_language}
                </p>
                <p>
                  <strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
