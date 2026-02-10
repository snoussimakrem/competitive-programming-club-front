import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Heart
} from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const handleEventsClick = () => {
    window.location.href = '/#events';
  };

  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Team', href: '/#team' },
    { name: 'Events', href: '/#events' },
    { name: 'Resources', href: '/#resources' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Join Now', href: '/#join' }
  ];

  const resources = [
    { name: 'Learning Paths', href: '/#resources' },
    { name: 'Video Tutorials', href: '/#resources' },
    { name: 'Practice Problems', href: '/#resources' },
    { name: 'Code Templates', href: '/#resources' },
    { name: 'Blog', href: '/#resources' },
    { name: 'Documentation', href: '/#resources' }
  ];

  const events = [
    { name: 'Weekly Contests', href: '/#events' },
    { name: 'Workshops', href: '/#events' },
    { name: 'Bootcamps', href: '/#events' },
    { name: 'Interview Prep', href: '/#events' },
    { name: 'Calendar', href: '/#events' },
    { name: 'Past Events', href: '/#events' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/cpcenicarthage/', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/cpcenicarthage/', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/cpc-enicar/posts/?feedView=all', label: 'LinkedIn' },
    ,
    
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <motion.div
              className="footer-col footer-about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <img src="/logo192.png" alt="CPC Logo" style={{ width: '32px', height: '32px' }} />
                <div>
                  <h3 className="logo-text">Competitive Programming Club</h3>
                  <p className="logo-tagline">Master Algorithms • Conquer Contests • Build Skills</p>
                </div>
              </div>
              <p className="footer-description">
                We're a community of passionate programmers dedicated to helping 
                developers excel in competitive programming and algorithm interviews.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.href} className="footer-link">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="footer-title">Events</h4>
              <ul className="footer-links">
                {events.map((event, index) => (
                  <li key={index}>
                    <a href={event.href} className="footer-link">
                      {event.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="footer-col footer-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="footer-title">Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <Mail size={18} />
                  <span>cpcenicarthage@gmail.com</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+216 2136513</span>
                </li>
                <li>
                  <MapPin size={18} />
                  <span>Annexe Enicarthage , charguia 2</span>
                </li>
              </ul>
              
              <div className="newsletter">
                <h5 className="newsletter-title">Stay Updated</h5>
                <p className="newsletter-text">Get weekly coding challenges and updates</p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="newsletter-input"
                  />
                  <motion.button
                    className="newsletter-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {new Date().getFullYear()} Competitive Programming Club. All rights reserved.
            </div>
            <div className="footer-links-bottom">
              <a href="https://policies.google.com/privacy?hl=en-US" className="footer-link-bottom">Privacy Policy</a>
              <a href="https://policies.google.com/terms?hl=en-US" className="footer-link-bottom">Terms of Service</a>
              <a href="https://policies.google.com/privacy?hl=en-US#infosharing" className="footer-link-bottom">Cookie Policy</a>
              <a href="https://developersonair.withgoogle.com/code-of-conduct" className="footer-link-bottom">Code of Conduct</a>
            </div>
          </div>
          
          <motion.div
            className="footer-made-with"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <Heart size={16} className="heart-icon" />
            <span>for the programming community</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;