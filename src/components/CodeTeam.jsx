import React from 'react';
import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';
import '../styles/CodeTeam.css';

const CodeTeam = () => {
  const teamMembers = [
    {
      image: '/img/m.jpg',
      title: 'Makrem Snoussi',
      subtitle: 'Chairman ',
      handle: 'makrem.snoussi@enicar.ucar.tn',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg, #4F46E5, #7C3AED)',
      url: 'https://www.linkedin.com/in/makrem-snoussi-421b39286/',
      role: 'Chairman'
    },
    {
      image: '/img/n.jpg',
      title: 'Nour Bribech  ',
      subtitle: 'Vice-Chairman ',
      handle: 'nour.bribech@enicar.ucar.tn',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #059669)',
      url: 'https://www.linkedin.com/in/nour-bribech-6aa169363/',
      role: 'Vice-Chairman'
    },
    {
      image: '/img/f.jpg',
      title: 'Fatma Bouajla',
      subtitle: 'General Secretary',
      handle: 'fatma.bouajla@enicar.ucar.tn',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #D97706)',
      url: 'https://www.linkedin.com/in/fatma-bouajla-7534b7338/',
      role: 'General Secretary'
    },
    {
      image: '/img/w.jpg',
      title: ' Wissal Azzouz ',
      subtitle: 'Event Manager',
      handle: 'wissal.azzouz@enicar.ucar.tn',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #DC2626)',
      url: 'https://www.linkedin.com/in/wissal-azzouz-b72a88333/',
      role: 'Event Manager'
    },
    {
      image: '/img/c.jpg',
      title: 'Mohamed Chaker Belhadj Amor',
      subtitle: 'Treasurer',
      handle: 'MohamedChaker.BelhadjAmor@enicar.ucar.tn',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #7C3AED)',
      url: 'https://www.linkedin.com/in/chaker-belhadj-amor/',
      role: 'Treasurer'
    },
    {
      image: '/img/o.jpg',
      title:' Ons chebel',
      subtitle: 'Webmaster',
      handle: 'ons.chebel@enicar.ucar.tn',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #7C3AED)',
      role: 'Webmaster'
    },
    {
      image: '/img/i.jpg',
      title: 'Akrout Isra',
      subtitle: 'Humain Resources Manager',
      handle: 'isra.akrout@enicar.ucar.tn',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)',
      
      role: 'Humain Resources Manager'
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
    <section className="code-team-section section-padding" id="team">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Meet Our Code Team</h2>
          <p className="section-subtitle">
            Learn from experienced competitive programmers, ICPC participants, and algorithm experts 
            who are passionate about mentoring the next generation of problem solvers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="team-content"
        >
          <motion.div variants={itemVariants} className="team-stats">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Combined Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Problems Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Students Mentored</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="team-grid-wrapper" id="team-grid-wrapper">
            <ChromaGrid 
              items={teamMembers} 
              columns={3}
              rows={2}
              radius={350}
              className="team-chroma-grid"
              damping={0.3}
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="team-description"
          >
            <div className="description-card">
              <h3>Why Learn With Our Team?</h3>
              <p>
                Our instructors bring real-world competitive programming experience from top-tier 
                competitions like ICPC, Google Code Jam, and Facebook Hacker Cup. They've solved 
                thousands of problems and understand the exact strategies needed to excel.
              </p>
              <ul className="team-benefits">
                <li>Personalized mentorship and code reviews</li>
                <li>Live problem-solving sessions</li>
                <li>Interview preparation guidance</li>
                <li>Access to exclusive practice problems</li>
                <li>Weekly office hours for 1-on-1 help</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeTeam;