import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Code, Database, Download, ExternalLink, Star } from 'lucide-react';
import '../styles/FeaturedResources.css';

const FeaturedResources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Algorithm Visualization Guide',
      type: 'visual',
      category: 'algorithms',
      difficulty: 'Beginner',
      format: 'Interactive',
      rating: 4.9,
      downloads: '2.5k',
      description: 'Interactive visualizations of common algorithms with step-by-step explanations.',
      icon: <BookOpen size={24} />,
      color: '#4F46E5',
      featured: true,
      downloadHref: '/PDF/VisuAlgo_Overview.pdf',
      previewHref: 'https://visualgo.net/en'
      },
    {
      id: 2,
      title: 'Dynamic Programming Masterclass',
      type: 'video',
      category: 'dp',
      difficulty: 'Advanced',
      format: 'Video Series',
      rating: 4.8,
      downloads: '1.8k',
      description: '10-hour comprehensive video series covering all DP patterns and variations.',
      icon: <Video size={24} />,
      color: '#10B981',
      featured: true,
      downloadHref: '/PDF/dynamic-programming.pdf',
      previewHref: 'https://youtu.be/oBt53YbR9Kk?si=ac8pPyWhASyeG1fb'
    },
    {
      id: 3,
      title: 'Competitive Programming Handbook',
      type: 'pdf',
      category: 'general',
      difficulty: 'All Levels',
      format: 'PDF E-book',
      rating: 4.9,
      downloads: '3.2k',
      description: 'Complete guide covering data structures, algorithms, and contest strategies.',
      icon: <FileText size={24} />,
      color: '#F59E0B',
      featured: true,
      downloadHref: '/PDF/book.pdf',
      previewHref: 'https://codeforces.com/blog/entry/116371'
    },
    {
      id: 4,
      title: 'Code Templates Library',
      type: 'code',
      category: 'templates',
      difficulty: 'Intermediate',
      format: 'Code Snippets',
      rating: 4.7,
      downloads: '4.1k',
      description: 'Ready-to-use templates for common algorithms and data structures.',
      icon: <Code size={24} />,
      color: '#EF4444',
      featured: false,
      downloadHref: '/PDF/Using-the-C-Standard-Template-Libraries.pdf',
      previewHref: 'https://codeforces.com/blog/entry/94933'
    },
    {
      id: 5,
      title: 'Problem Database',
      type: 'database',
      category: 'practice',
      difficulty: 'All Levels',
      format: 'Online Platform',
      rating: 4.9,
      downloads: '5.0k+',
      description: 'Curated collection of 1000+ problems with solutions and explanations.',
      icon: <Database size={24} />,
      color: '#8B5CF6',
      featured: false,
      downloadHref: 'https://github.com/Eronana/CodeforcesPDF/commit/9ed777b10d10176388c77f5cd25823c530862dd4',
      previewHref: 'https://github.com/AliOsm/PDF-CodeForces-Problems'
    },
   /* {
      id: 6,
      title: 'Interview Preparation Kit',
      type: 'package',
      category: 'interview',
      difficulty: 'Intermediate',
      format: 'Study Plan',
      rating: 4.8,
      downloads: '2.3k',
      description: '30-day study plan with mock interviews and company-specific questions.',
      icon: <BookOpen size={24} />,
      color: '#06B6D4',
      featured: false,
      downloadHref: '/resources/6/download',
      previewHref: '/resources/6/download'
    }  */
  ];

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'algorithms', label: 'Algorithms' },
    { id: 'dp', label: 'Dynamic Programming' },
    { id: 'templates', label: 'Templates' },
    { id: 'interview', label: 'Interview Prep' },
    { id: 'practice', label: 'Practice Problems' }
  ];

  const filteredResources = resources.filter(resource =>
    activeCategory === 'all' || resource.category === activeCategory
  );

  return (
    <section className="featured-resources section-padding" id="resources">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Training Resources</h2>
          <p className="section-subtitle">
            Access our curated collection of learning materials and tools for competitive programming
          </p>
        </motion.div>

        <motion.div
          className="categories-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="resources-grid">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className={`resource-card ${resource.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div 
                className="resource-header"
                style={{ '--resource-color': resource.color }}
              >
                <div className="resource-icon">
                  {resource.icon}
                </div>
                <div className="resource-meta">
                  <span className="resource-type">{resource.type}</span>
                  <span className="resource-format">{resource.format}</span>
                </div>
              </div>

              <div className="resource-content">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                
                <div className="resource-details">
                  <div className="detail">
                    <span className="detail-label">Difficulty:</span>
                    <span className={`difficulty ${resource.difficulty.toLowerCase()}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Rating:</span>
                    <div className="rating">
                      <Star size={16} fill="#FBBF24" stroke="#FBBF24" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <div className="detail">
                    <span className="detail-label">Downloads:</span>
                    <span>{resource.downloads}</span>
                  </div>
                </div>
              </div>

              <div className="resource-actions">
                <motion.a
                  href={resource.downloadHref}
                  className="download-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download
                </motion.a>
                <motion.a
                  href={resource.previewHref}
                  className="preview-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                  Preview
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="resources-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Practice Problems</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Video Tutorials</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Code Templates</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Forum Support</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="resources-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="cta-text">Want access to our complete resource library?</p>
          <motion.a
            href="/resources"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Resources
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedResources;