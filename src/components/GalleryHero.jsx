import React from 'react';
import { motion } from 'framer-motion';
import '../styles/GalleryHero.css';

const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover Our <span className="gradient-text">Photography Clubs</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore the creative universe of our competitive programming clubs through 
            an immersive 3D gallery. Click on any photo to discover the unique style 
            and activities of each club.
          </motion.p>
          
          <motion.div
            className="hero-instructions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="instruction-item">
              <div className="instruction-icon"></div>
              <p>Drag to rotate the gallery</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-icon"></div>
              <p>Click on a photo to enlarge</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-icon"></div>
              <p>Discover each club's story</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;