import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Gennady Korotkevich (aka “tourist”)',
      role: 'A Belarusian competitive programming legend',
      content: 'I try various [strategies], and one of them is the right one. I am no genius. I am simply good at it.',
      image: 'https://en.wikipedia.org/wiki/File:Korotkevich_ITMO.jpg',
      achievement: 'Legendary competitor, multiple world titles'
    },
    {
      name: 'Petr Mitrichev',
      role: 'A Russian competitive programmer',
      content: 'Books are useful as reference, but working through actual contest problems is what builds skill',
      image: 'https://www.redgreencode.com/wp-content/uploads/2018/12/CPFAQ-PetrMitrichev.png',
      achievement: 'Longtime champion and community influencer'
    },
    {
      name: 'Errichto ',
      role: 'A top competitive programmer',
      content: 'Start by mastering basics, use online judges and editorials to learn, and focus on understanding rather than just memorizing solutions.',
      image: 'https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2',
      achievement: 'Top educators & public figures in CP learning'
    },
   

  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Masters Quotes & Opinion </h2>
          <p className="section-subtitle">
            Hear from Legends about their journey in competitive programming
          </p>
        </motion.div>

        <div className="testimonials-container">
          <motion.button
            className="nav-button prev-button"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quote-icon">
                  <Quote size={48} />
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonials[currentIndex].content}"</p>
                  
                  
                </div>

                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                    <div className="author-achievement">
                      <span className="achievement-badge">{testimonials[currentIndex].achievement}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="nav-button next-button"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">beneficial</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">inspiring Stories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Success Stories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Recommended</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;