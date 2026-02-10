/*import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';
import '../styles/CTASection.css';

const CTASection = () => {
  // API Base URL
  const API_BASE_URL = 'http://localhost:5000/api';
  
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    goals: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear errors when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate form data first
      if (!formData.name || !formData.email || !formData.level || !formData.goals) {
        throw new Error('Please fill in all required fields');
      }

      // Submit directly without authentication
      const response = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setSuccess('Application submitted successfully!');

        // Reset form immediately after successful submission
        setFormData({ name: '', email: '', level: '', goals: '' });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccess('');
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  const benefits = [
    'Access to all events and workshops',
    'Unlimited resource downloads',
    'Personalized learning path',
    'Priority community support',
    'Progress tracking & analytics',
    'Certificate of completion'
  ];



  return (
    <section className="cta-section section-padding" id="join">
      <div className="container">
        <div className="cta-content">
          <motion.div
            className="cta-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">
              Ready to Level Up Your <span className="gradient-text">Programming Skills?</span>
            </h2>
            
            <p className="cta-description">
              Join thousands of developers who have transformed their problem-solving abilities 
              through our community. Start your journey today!
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="stats-row">
              <div className="stat">
                <Users size={24} />
                <div>
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Active Members</div>
                </div>
              </div>
              <div className="stat">
                <Award size={24} />
                <div>
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cta-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="signup-card">
              <div className="card-header">
                <h3 className="card-title">Join the Club Today</h3>
                <p className="card-subtitle">Free membership - No credit card required</p>
              </div>

*/

 /*              {/* Error Message *//*}
              {error && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Success Message *//*}
              {success && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={18} />
                  <span>{success}</span>
                </motion.div>
              )}

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="level">Experience Level *</label>
                  <select
                    id="level"
                    className="form-select"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goals">Learning Goals *</label>
                  <textarea
                    id="goals"
                    placeholder="What do you want to achieve? (e.g., master algorithms, prepare for interviews, compete in contests)"
                    className="form-textarea"
                    rows="3"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <div className="character-count">
                    {formData.goals.length}/1000 characters
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      Join Free Community
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>

                <p className="form-note">
                  * Required fields. By joining, you agree to our Terms and Privacy Policy. 
                  We'll never spam you or share your information.
                </p>
              </form>


            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default CTASection;*/
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';
import '../styles/CTASection.css';

const CTASection = () => {
  // API Base URL - Try different options if needed
  const API_BASE_URL = 'http://localhost:5000/api';
  // Alternative: const API_BASE_URL = 'http://127.0.0.1:5000/api';
  
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    goals: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    // Clear errors when user types
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log('🚀 Submitting application...');
      console.log('📤 API URL:', `${API_BASE_URL}/applications`);
      console.log('📦 Data:', formData);

      // Validate form data first
      if (!formData.name || !formData.email || !formData.level || !formData.goals) {
        throw new Error('Please fill in all required fields');
      }

      // Test if backend is reachable first
      try {
        const testResponse = await fetch(`${API_BASE_URL}/test`);
        console.log('🔗 Backend test response:', testResponse.status);
      } catch (testError) {
        console.error('❌ Backend not reachable:', testError);
        throw new Error('Cannot connect to server. Please make sure the backend is running on port 5000.');
      }

      // Submit application
      const response = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('📨 Response status:', response.status);
      console.log('📨 Response headers:', response.headers);

      const data = await response.json();
      console.log('📨 Response data:', data);

      if (data.success) {
        setSubmitted(true);
        setSuccess('Application submitted successfully!');

        // Reset form
        setFormData({ name: '', email: '', level: '', goals: '' });

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccess('');
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('❌ Full error:', error);
      console.error('❌ Error name:', error.name);
      console.error('❌ Error message:', error.message);
      
      // More specific error messages
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError('Cannot connect to server. Make sure backend is running on port 5000.');
      } else if (error.message.includes('Network')) {
        setError('Network error. Please check your internet connection and make sure the backend server is running.');
      } else {
        setError(error.message || 'An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'Access to all events and workshops',
    'Unlimited resource downloads',
    'Personalized learning path',
    'Priority community support',
    'Progress tracking & analytics',
    'Certificate of completion'
  ];

  return (
    <section className="cta-section section-padding" id="join">
      <div className="container">
        <div className="cta-content">
          <motion.div
            className="cta-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">
              Ready to Level Up Your <span className="gradient-text">Programming Skills?</span>
            </h2>
            
            <p className="cta-description">
              Join thousands of developers who have transformed their problem-solving abilities 
              through our community. Start your journey today!
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="stats-row">
              <div className="stat">
                <Users size={24} />
                <div>
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Active Members</div>
                </div>
              </div>
              <div className="stat">
                <Award size={24} />
                <div>
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cta-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="signup-card">
              <div className="card-header">
                <h3 className="card-title">Join the Club Today</h3>
                <p className="card-subtitle">Free membership - No credit card required</p>
              </div>

              {/* Status Messages */}
              <div className="status-messages">
                {error && (
                  <motion.div 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={18} />
                    <span>{error}</span>
                    <button 
                      className="retry-button"
                      onClick={() => setError('')}
                    >
                      ✕
                    </button>
                  </motion.div>
                )}

                {success && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={18} />
                    <span>{success}</span>
                  </motion.div>
                )}
              </div>

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="level">Experience Level *</label>
                  <select
                    id="level"
                    className="form-select"
                    value={formData.level}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="goals">Learning Goals *</label>
                  <textarea
                    id="goals"
                    placeholder="What do you want to achieve? (e.g., master algorithms, prepare for interviews, compete in contests)"
                    className="form-textarea"
                    rows="3"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    maxLength="1000"
                  />
                  <div className="character-count">
                    {formData.goals.length}/1000 characters
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      Join Free Community
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>

                <div className="form-footer">
                  <p className="form-note">
                    * Required fields. By joining, you agree to our Terms and Privacy Policy. 
                    We'll never spam you or share your information.
                  </p>
                  <p className="api-status">
                    {loading ? 'Connecting to server...' : 'Ready to submit'}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;