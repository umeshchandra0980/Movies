// VideoSequence.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./VideoSequence.css";

export default function VideoSequence() {
    const videos = [
        {
          video: '/Joker.mp4',
          title: "THE Joker",
          description: "A wizard attempts to capture Death but ends up trapping Dream, the lord of dreams.",
        },
        
          {
            video: '/Superman.mp4',
            title: "Superman",
            description: "An alien from Krypton becomes Earth's greatest protector while balancing his life as Clark Kent.",
          },
          {
            video: '/The Batman.mp4',
            title: "The Batman",
            description: "In Gotham’s darkest days, Batman uncovers corruption while facing a serial killer known as The Riddler.",
          }
      ];
      
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // 5 sec per video
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="video-container">
      <AnimatePresence>
        <motion.video
          key={index}
          src={videos[index].video}
          autoPlay
          muted
          playsInline
          loop={false}
          className="video-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Example Text Overlay */}
      <div className="video-text">
        <h1>Experience Cinema</h1>
        <p>Watch your favourite movies in style</p>
      </div>
    </div>
  );
}
