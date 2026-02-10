import React from 'react';
import { motion } from 'framer-motion';
import Hyperspeed from './Hyperspeed'; // Import the hyperspeed component
import '../styles/HeroSection.css';
import { Users, Calendar, Code2, Trophy, BookOpen, Zap } from 'lucide-react';

const HeroSection = () => {
  // Customize the hyperspeed effect for your theme
  const hyperspeedOptions = {
    onSpeedUp: () => console.log('Speed up!'),
    onSlowDown: () => console.log('Slow down!'),
    distortion: 'turbulentDistortion',
    length: 300, // Shorter for hero section
    roadWidth: 8,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 85,
    fovSpeedUp: 140,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 30,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [300 * 0.03, 300 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x6366f1, // Your primary color
      brokenLines: 0x8b5cf6,  // Your secondary color
      leftCars: [0x6366f1, 0x4f46e5, 0x4338ca], // Purple tones
      rightCars: [0x8b5cf6, 0x7c3aed, 0x6d28d9], // Violet tones
      sticks: 0x6366f1
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Hyperspeed Background */}
      <div className="hyperspeed-background">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to the <span className="gradient-text">Competitive Programming Club</span>
            </h1>
            <p className="hero-subtitle">
              Master algorithms, conquer contests, and build your problem-solving skills with our 
              community of passionate coders. Join thousands of developers who are leveling up 
              their coding abilities.
            </p>
            <div className="hero-actions">
              <motion.a
                href="#join"
                className="btn btn-primary hero-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={20} />
                Join the Community
              </motion.a>
              <motion.a
                href="#events"
                className="btn btn-secondary hero-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar size={20} />
                View Upcoming Events
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat">
              <div className="stat-icon">
                <Code2 size={24} />
              </div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <Trophy size={24} />
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Contests Hosted</div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <BookOpen size={24} />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Training Resources</div>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;