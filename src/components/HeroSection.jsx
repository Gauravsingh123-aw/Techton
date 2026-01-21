import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

function HeroSection({ title, subtitle, primaryBtn, secondaryBtn, image }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          {primaryBtn && (
            <Link to={primaryBtn.link} className="btn btn-primary">
              {primaryBtn.text}
            </Link>
          )}
          {secondaryBtn && (
            <Link to={secondaryBtn.link} className="btn btn-secondary">
              {secondaryBtn.text}
            </Link>
          )}
        </div>
      </div>
      {image && <div className="hero-image" style={{ backgroundImage: `url(${image})` }}></div>}
    </section>
  );
}

export default HeroSection;
