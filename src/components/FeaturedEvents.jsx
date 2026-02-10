import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, MapPin, ArrowRight, Award } from 'lucide-react';
import '../styles/FeaturedEvents.css';

const FeaturedEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Weekly Algorithm Session',
      type: 'workshop',
      date: 'Every Wednesday',
      time: '2:00 PM - 5:00 PM ',
      participants: '30+',
      difficulty: 'Intermediate',
      prize: 'Certificates',
      location: 'Annex Enicarthage',
      description: 'learn new lessons plus , practice algorithms in serveral problems.',
      featured: true,
      status: 'ongoing'
    },
    {
      id: 2,
      title: 'Bootcamp ',
      type: 'workshop',
      date: 'Nov 22, 2025',
      time: '1:00 PM - 6:00 PM ',
      participants: '20',
      difficulty: 'Beginner',
      prize: 'Certificates',
      location: 'Supcom',
      description: 'Master CP techniques with real problems from LEETCODE and learn from experts.',
      featured: true,
      status: 'occurred '
    },
    {
      id: 3,
      title: 'Hawkins code',
      type: 'workshop',
      date: 'Every Wednesday for the month of october' ,
      time: '2:00 PM - 4:00 PM ',
      participants: '50+',
      difficulty: 'Beginner',
      location: 'Annex Enicarthage',
      description: 'Start your competitive programming journey with guided problem-solving.',
      featured: true,
      status: 'occurred '
    },
    {
      id: 4,
      title: 'Code Slayer Competition',
      type: 'contest',
      date: 'Nov 12, 2025',
      time: '6:00 AM - 10:00 PM ',
      participants: '20 teams',
      difficulty: 'Beginner',
      prize: 'Gifts and Swags',
      location: 'Virtual ',
      description: 'Full-scale ICPC style competition with real-world problem statements.',
      featured: true,
      status: 'occurred '
    },
    {
      id: 5,
      title: 'Interne Contest',
      type: 'contest',
      date: 'Dec 8, 2024',
      time: ' 5:00 PM - 7:00 PM EST',
      participants: '20',
      difficulty: 'Intermediate',
      prize: 'Money Prizes',
      location: 'On site',
      description: 'Compete against peers in a timed contest to test your skills and win prizes.',
      featured: false,
      status: 'occurred '
    },
    {
      id: 6,
      title: 'General Assembly Meeting',
      type: 'workshop',
      date: 'OCT 15, 2025',
      participants: '40',
      difficulty: 'All Levels',
      location: 'on site',
      description: 'Discuss upcoming events, workshops, and club initiatives with members.',
      featured: false,
      status: 'occurred '
    }
  ];

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'contest', label: 'Contests' },
    { id: 'workshop', label: 'Workshops' }
  ];

  const filteredEvents = events.filter(event => 
    activeFilter === 'all' || 
    event.status === activeFilter || 
    event.type === activeFilter
  );

  return (
    <section className="featured-events section-padding" id="events">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Events</h2>
          <p className="section-subtitle">
            Join our exciting programming events designed to challenge and inspire
          </p>
        </motion.div>

        <motion.div
          className="events-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`event-card ${event.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              {event.featured && (
                <div className="featured-badge">
                  <Award size={16} />
                  <span>Featured</span>
                </div>
              )}

              <div className="event-header">
                <div className="event-type">{event.type.toUpperCase()}</div>
                <div className={`event-status ${event.status}`}>
                  {event.status}
                </div>
              </div>

              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>

              <div className="event-details">
                <div className="detail-item">
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
                <div className="detail-item">
                  <Clock size={18} />
                  <span>{event.time}</span>
                </div>
                <div className="detail-item">
                  <Users size={18} />
                  <span>{event.participants}</span>
                </div>
                <div className="detail-item">
                  <Trophy size={18} />
                  <span>{event.prize}</span>
                </div>
                <div className="detail-item">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="event-footer">
                <div className="difficulty">
                  <span className={`difficulty-badge ${event.difficulty.toLowerCase()}`}>
                    {event.difficulty}
                  </span>
                </div>
                <motion.a
                  href="https://www.instagram.com/cpcenicarthage/"
                  className="register-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Look for Now
                  <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="events-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="cta-text">Want to see all events and their schedules?</p>
          <motion.a
            href="https://www.instagram.com/cpcenicarthage/"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Calendar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;