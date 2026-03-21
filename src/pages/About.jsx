import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero with High Visibility Contrast */}
      <div className="about-hero">
        <div className="container">
          <span className="premium-tag">Established 2026</span>
          <h1>Precision Engineering <br/> Meets <span>Digital Innovation</span></h1>
          <p>Bridging the gap between mechanical design and software excellence.</p>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="about-overview">
          <div className="overview-card">
            <div className="overview-content">
              <span className="accent-text">Our Story</span>
              <h2>A Forward-Thinking Partner</h2>
              <p>TektonTech Solutions specializes in bridging the gap between traditional engineering practices and modern digital transformation.</p>
            </div>
            <div className="overview-stats">
              <div className="stat-pill">
                <span className="stat-v">100%</span>
                <span className="stat-l">Accuracy</span>
              </div>
              <div className="stat-pill">
                <span className="stat-v">Agile</span>
                <span className="stat-l">Process</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision/Mission Grid */}
        <section className="vm-section">
          <div className="vm-grid">
            <div className="vm-item light">
              <div className="vm-num">01</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted partner for multi-domain engineering, delivering sustainable results.</p>
            </div>
            <div className="vm-item dark">
              <div className="vm-num">02</div>
              <h3>Our Mission</h3>
              <p>To empower businesses through cutting-edge mechanical design and custom software.</p>
            </div>
          </div>
        </section>

        {/* Improved "What We Offer" Section */}
        <section className="expertise-section">
          <h2 className="rich-title">What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">⚙️</div>
              <h4>Mechanical Design</h4>
              <div className="offer-divider"></div>
              <ul>
                <li>CAD & SPM Design</li>
                <li>Jig & Fixtures Development</li>
                <li>Reverse Engineering</li>
              </ul>
            </div>
            <div className="offer-card featured">
              <div className="offer-icon">💻</div>
              <h4>Software Solutions</h4>
              <div className="offer-divider"></div>
              <ul>
                <li>Web & Mobile Applications</li>
                <li>Custom ERP & CRM Systems</li>
                <li>Cloud Infrastructure</li>
              </ul>
            </div>
            <div className="offer-card">
              <div className="offer-icon">📐</div>
              <h4>Industrial Layout</h4>
              <div className="offer-divider"></div>
              <ul>
                <li>Plant & Office Layouts</li>
                <li>3D Space Optimization</li>
                <li>Workflow Analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries-section">
          <h2 className="rich-title">Industries Served</h2>
          <div className="tag-cloud">
            {["Automotive", "Manufacturing", "Healthcare", "Technology", "Retail"].map(tag => (
              <span key={tag} className="rich-tag">{tag}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;