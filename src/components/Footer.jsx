import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About TektonTech</h3>
          <p>Multi-domain expertise in Mechanical Design, Software Solutions, and Layout Design.</p>
          <div className="social-links">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a> */}
            <a href="https://www.linkedin.com/in/tektontech-solution-2637453a8/" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://www.instagram.com/tektontechsolutions_/" target="_blank" rel="noopener noreferrer">📷</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/mechanical">Mechanical Design</Link></li>
            <li><Link to="/services/software">Software Solutions</Link></li>
            <li><Link to="/services/interior">Layout Design</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📧 Email: <a href="mailto:tektontechsolutions@gmail.com">tektontechsolutions@gmail.com</a></p>
          <p>📱 Phone: <a href="tel:+919696573095">+91 96965 73095</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/919696573095" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
          <p>📍Crossing Republic Ghazibad India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tekton Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
