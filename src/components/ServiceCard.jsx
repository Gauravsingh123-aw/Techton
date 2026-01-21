import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3>{service.name}</h3>
      <p>{service.shortDesc}</p>
      <Link to={`/services/${service.id}`} className="learn-more-btn">
        Learn More →
      </Link>
    </div>
  );
}

export default ServiceCard;
