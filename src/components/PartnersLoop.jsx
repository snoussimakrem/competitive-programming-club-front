import React from 'react';
import './PartnersLoop.css';

const PartnersLoop = () => {
  const partners = [
    { name: 'Partner 1', logo: '/logo192.png' },
    { name: 'Partner 2', logo: '/logo192.png' },
    { name: 'Partner 3', logo: '/logo192.png' },
    { name: 'Partner 4', logo: '/logo192.png' },
    { name: 'Partner 5', logo: '/logo192.png' },
    { name: 'Partner 6', logo: '/logo192.png' },
  ];

  return (
    <section className="partners-loop">
      <div className="container">
        <h2 className="section-title">Our Partners</h2>
        <div className="partners-container">
          <div className="partners-track">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersLoop;
