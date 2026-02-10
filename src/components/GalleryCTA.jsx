import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Calendar } from 'lucide-react';
import '../styles/GalleryCTA.css';

const GalleryCTA = () => {
  return (
    <section className="gallery-cta">
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">
            Join a <span className="gradient-text">Photography Club</span>
          </h2>
          
          <p className="cta-description">
            Whether you're passionate about photography, videography, or visual storytelling, 
            find your community and start creating amazing content with fellow developers.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="feature-icon">
                <Camera size={32} />
              </div>
              <h3>Capture Moments</h3>
              <p></p>
            </div>
            
            <div className="cta-feature">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>Build Community</h3>
              <p></p>
            </div>
            
            <div className="cta-feature">
              <div className="feature-icon">
                <Calendar size={32} />
              </div>
              <h3>Regular Events</h3>
              <p></p>
            </div>
          </div>
          
          <div className="cta-actions">
            <motion.a
              href="#join"
              className="btn btn-primary cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join a Club
            </motion.a>
            
            <motion.a
              href="#events"
              className="btn btn-secondary cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Events
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCTA;