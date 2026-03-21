import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const images = [
  "https://res.cloudinary.com/dldz286xx/image/upload/v1774122679/steptodown.com159497_dngy79.jpg",
  "https://res.cloudinary.com/dldz286xx/image/upload/v1774122488/steptodown.com496647_vrqhsx.jpg",
  "https://res.cloudinary.com/dldz286xx/image/upload/v1774120854/steptodown.com679318_useneu.jpg",
];

function HeroSection({ title, subtitle, primaryBtn, secondaryBtn }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          // Change this line inside your HeroSection.jsx map:
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${img})`,
          }}
        >
          <div className="hero-text-wrapper">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-action-area">
              {primaryBtn && (
                <Link to={primaryBtn.link} className="das-btn das-btn-filled">
                  {primaryBtn.text}
                </Link>
              )}
              {secondaryBtn && (
                <Link
                  to={secondaryBtn.link}
                  className="das-btn das-btn-outline"
                >
                  {secondaryBtn.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HeroSection;
