import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import '../styles/ResourcesStack.css';

const ResourcesStack = () => {
  const technologies = [
    { name: 'C++', icon: <Code size={40} />, color: '#00599C' },
    { name: 'Python', icon: <Code size={40} />, color: '#3776AB' },
    { name: 'Java', icon: <Code size={40} />, color: '#ED8B00' },
    { name: 'JavaScript', icon: <Code size={40} />, color: '#F7DF1E' },
    { name: 'SQL', icon: <Database size={40} />, color: '#336791' },
    { name: 'React', icon: <Globe size={40} />, color: '#61DAFB' },
    { name: 'Node.js', icon: <Globe size={40} />, color: '#339933' },
    { name: 'Algorithms', icon: <Cpu size={40} />, color: '#FF6B6B' }
  ];

  return (
    <section className="resources-stack section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technology Stack</h2>
          <p className="section-subtitle">
            Master the tools and languages used in competitive programming
          </p>
        </motion.div>

        <div className="stack-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="stack-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stack-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="stack-name">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesStack;
