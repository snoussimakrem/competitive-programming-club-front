import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, BookOpen, Trophy, Zap, MessageSquare } from 'lucide-react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Trophy size={32} />,
      title: 'Regular Events',
      description: 'Weekly coding contests, algorithm challenges, and mock interviews to sharpen your skills.',
      color: '#4F46E5'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Training Resources',
      description: 'Curated learning paths, video tutorials, and extensive problem database for all skill levels.',
      color: '#10B981'
    },
    {
      icon: <Users size={32} />,
      title: 'Community Support',
      description: '24/7 Discord community, peer programming sessions, and mentor guidance from experts.',
      color: '#F59E0B'
    },
    {
      icon: <Code size={32} />,
      title: 'Live Coding Sessions',
      description: 'Interactive live coding streams where experts solve complex problems in real-time.',
      color: '#EF4444'
    },
    {
      icon: <Zap size={32} />,
      title: 'Speed Challenges',
      description: 'Time-bound coding sprints to improve your speed and accuracy under pressure.',
      color: '#8B5CF6'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Discussion Forums',
      description: 'Dedicated forums for algorithm discussions, doubt clearing, and solution sharing.',
      color: '#06B6D4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="features-section section-padding" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Core Club Offerings</h2>
          <p className="section-subtitle">
            Everything you need to excel in competitive programming, from beginner to expert level.
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div 
                className="feature-icon-wrapper"
                style={{ '--feature-color': feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="cta-text">Ready to accelerate your programming journey?</p>
          <motion.a
            href="#join"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;