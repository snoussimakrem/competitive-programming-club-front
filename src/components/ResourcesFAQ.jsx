import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../styles/ResourcesFAQ.css';

const ResourcesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I get started with competitive programming?',
      answer: 'Start with basic programming concepts, then move to data structures and algorithms. Practice regularly on platforms like LeetCode and CodeChef.'
    },
    {
      question: 'What programming languages are recommended?',
      answer: 'C++, Python, and Java are most popular. C++ is fastest for competitive coding, Python for quick prototyping, Java for enterprise-level problems.'
    },
    {
      question: 'How often should I practice?',
      answer: 'Aim for 1-2 hours daily. Consistency is more important than long sessions. Focus on understanding concepts rather than just solving problems.'
    },
    {
      question: 'What resources should I use for learning algorithms?',
      answer: 'CLRS book, GeeksforGeeks, and our curated tutorials. Also, practice on multiple platforms to get diverse problem sets.'
    },
    {
      question: 'How do I improve my problem-solving speed?',
      answer: 'Practice regularly, learn common patterns, and participate in contests. Time yourself and analyze your solutions after each problem.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="resources-faq section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about competitive programming
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <motion.div
                className="faq-answer"
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesFAQ;
