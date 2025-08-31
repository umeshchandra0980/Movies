import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Plus, Check,Heart } from 'lucide-react';
import './CardGallery.css';
import { Link } from 'react-router';
import { useWishlist } from '../conText/Whishlist';

const ComicCard = ({ comic, isHovered, onHover, onLeave, isOtherHovered ,link}) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  
  const isInWishlist = wishlist.some(item => item.id === comic.id);
  return (
    <motion.div
      className="comic-card"
      onMouseEnter={() => onHover(comic.id)}
      onMouseLeave={onLeave}
      animate={{
        scale: isHovered ? 1.15 : 1,
        filter: isOtherHovered && !isHovered ? 'blur(4px) brightness(0.5)' : 'blur(0px) brightness(1)',
        zIndex: isHovered ? 10 : 1
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      {/* Background Image */}
     

      <div 
        className="comic-card__background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${comic.backdrop_path})`
      
        }}
      />
      

      
      {/* Dark Overlay */}
      <div className="comic-card__overlay" />
      
      {/* Content Overlay - Always visible but animated */}
      <AnimatePresence>
        <motion.div
          className="comic-card__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Top Controls */}
          <div className="comic-card__controls">
            <motion.button
              className="comic-card__play-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
                <Link to={link}><Play className="comic-card__play-icon" fill="white" /></Link> 
            </motion.button>
            
            <div className="comic-card__action-buttons">
              {/* <motion.button
                className="comic-card__action-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                

              >
              
                <Heart size={20}  className="comic-card__action-icon" />
              </motion.button> */}
              {!isInWishlist ? (
          <motion.button
            className="comic-card__action-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToWishlist(comic)}
          >
            <Plus className="comic-card__action-icon" />
          </motion.button>
        ) : (
          <motion.button
            className="comic-card__action-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => removeFromWishlist(comic.id)}
          >
            <Check className="comic-card__action-icon" />
          </motion.button>
        )}
              
              <motion.button
                className="comic-card__action-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Check className="comic-card__action-icon" />
              </motion.button>
            </div>
          </div>
          
          {/* Bottom Info */}
          <motion.div
            className="comic-card__info"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="comic-card__title">
              {comic.title}
            
            </h3>
            <div className="comic-card__genres">
              {/* {comic.genres.map((genre, index) => (
                <span key={index} className="comic-card__genre">
                  {genre}
                  {index < comic.genres.length - 1 && ' • '}
                </span>
              ))} */}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// export default const CardGallery = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

 

//   const handleCardHover = (cardId) => {
//     setHoveredCard(cardId);
//   };

//   const handleCardLeave = () => {
//     setHoveredCard(null);
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper">
//         <h1 className="carousel-title">Featured Comics</h1>
        
//         <div className="carousel-cards">
//           {comics.map((comic) => (
//             <ComicCard
//               key={comic.id}
//               comic={comic}
//               isHovered={hoveredCard === comic.id}
//               isOtherHovered={hoveredCard !== null}
//               onHover={handleCardHover}
//               onLeave={handleCardLeave}
//             />
//           ))}
//         </div>
        
       
//       </div>
//     </div>
//   );
// };

export default ComicCard;