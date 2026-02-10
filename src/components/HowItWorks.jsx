import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Calendar, Book, Trophy, MessageCircle, Users as UsersIcon } from 'lucide-react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus size={28} />,
      title: 'Join the Club',
      description: 'Sign up with your email and programming background. It\'s free and takes less than 2 minutes.',
      step: '01'
    },
    {
      icon: <Book size={28} />,
      title: 'Access Resources',
      description: 'Get instant access to our curated learning paths, problem sets, and tutorial library.',
      step: '02'
    },
    {
      icon: <Calendar size={28} />,
      title: 'Participate in Events',
      description: 'Join weekly contests, workshops, and coding sprints scheduled throughout the month.',
      step: '03'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Engage with Community',
      description: 'Connect with peers, ask questions in forums, and get feedback on your solutions.',
      step: '04'
    },
    {
      icon: <Trophy size={28} />,
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and personalized recommendations.',
      step: '05'
    },
    {
      icon: <UsersIcon size={28} />,
      title: 'Become a Mentor',
      description: 'Once experienced, help others grow by becoming a community mentor.',
      step: '06'
    }
  ];

  return (
    <section className="how-it-works section-padding" id="how-it-works">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Start your competitive programming journey in just a few simple steps
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-header">
                <div className="step-number">{step.step}</div>
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="process-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="timeline-bar">
            <div className="timeline-progress"></div>
          </div>
          <div className="timeline-milestones">
            <div className="milestone">
              <div className="milestone-dot"></div>
              <span className="milestone-label">Join</span>
            </div>
            <div className="milestone">
              <div className="milestone-dot"></div>
              <span className="milestone-label">Learn</span>
            </div>
            <div className="milestone">
              <div className="milestone-dot"></div>
              <span className="milestone-label">Practice</span>
            </div>
            <div className="milestone">
              <div className="milestone-dot"></div>
              <span className="milestone-label">Compete</span>
            </div>
            <div className="milestone">
              <div className="milestone-dot"></div>
              <span className="milestone-label">Excel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;