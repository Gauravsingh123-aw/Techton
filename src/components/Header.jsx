import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img className="logo-icon" src={logo} alt="TektonTech Logo"/>
        </Link>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          
          <div className="dropdown">
            <span className="dropdown-title">Services</span>
            <div className="dropdown-menu">
              <Link to="/services/mechanical" onClick={() => setIsMenuOpen(false)}>Mechanical Design</Link>
              <Link to="/services/software" onClick={() => setIsMenuOpen(false)}>Software & IT</Link>
              <Link to="/services/interior" onClick={() => setIsMenuOpen(false)}>Layout Design</Link>
            </div>
          </div>

          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/process" onClick={() => setIsMenuOpen(false)}>Process</Link>
          <Link to="/why-us" onClick={() => setIsMenuOpen(false)}>Why Us</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          
          {/* Main CTA: Matches the Hero Buttons */}
          <Link to="/contact" className="header-cta" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;