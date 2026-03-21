import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="icon">{service.icon}</div>
      <h3>{service.name}</h3>
      <p>{service.shortDesc}</p>
      <Link to={`/services/${service.id}`} className="service-link">
        View Info
      </Link>
    </div>
  );
}

export default ServiceCard;