import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <HeroSection
        title="About TektonTech Solutions"
        subtitle="Building excellence across Mechanical Design, Software, and Layout Design"
      />

      <div className="about-container">
        {/* Company Overview */}
        <section className="about-section">
          <h2>Company Overview</h2>
          <p>
            TektonTech Solutions is a forward-thinking organization established with a mission to deliver innovative engineering and design solutions. We specialize in bridging the gap between traditional engineering practices and modern digital transformation.
          </p>
          <p>
            Our team of experienced professionals brings together expertise from mechanical engineering, software development, and interior design to provide comprehensive, integrated solutions.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="about-section">
          <div className="vision-mission">
            <div className="vm-card">
              <h3>🎯 Our Vision</h3>
              <p>To be the most trusted partner for multi-domain engineering and design solutions, delivering innovative and sustainable results that exceed client expectations.</p>
            </div>
            <div className="vm-card">
              <h3>🚀 Our Mission</h3>
              <p>To empower businesses through cutting-edge mechanical design, custom software solutions, and transformative interior design that drive growth and innovation.</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-section">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>💡 Innovation</h3>
              <p>We constantly push boundaries to find creative solutions to complex challenges.</p>
            </div>
            <div className="value-card">
              <h3>🎯 Excellence</h3>
              <p>Quality and precision are at the heart of everything we do.</p>
            </div>
            <div className="value-card">
              <h3>🤝 Integrity</h3>
              <p>We build trust through transparency, honesty, and ethical practices.</p>
            </div>
            <div className="value-card">
              <h3>⚡ Efficiency</h3>
              <p>We deliver optimal results within stipulated timelines and budgets.</p>
            </div>
            <div className="value-card">
              <h3>🌱 Sustainability</h3>
              <p>We consider environmental impact in all our design and development practices.</p>
            </div>
            <div className="value-card">
              <h3>👥 Collaboration</h3>
              <p>We work closely with clients to understand and fulfill their unique needs.</p>
            </div>
          </div>
        </section>

        {/* Expertise Summary */}
        <section className="about-section">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>⚙️ Mechanical Design</h3>
              <ul>
                <li>CAD</li>
                <li>Product Development & Prototyping</li>
                <li>Manufacturing & Assembly Drawings</li>
                <li>FEA</li>
                <li>Reverse Engineering</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>💻 Software Solutions</h3>
              <ul>
                <li>Web Application Development</li>
                <li>Mobile App Development</li>
                <li>ERP & CRM Systems</li>
                <li>UI/UX Design</li>
                <li>Cloud Solutions & Maintenance</li>
              </ul>
            </div>
            <div className="expertise-card">
              <h3>🎨 Layout Design</h3>
              <ul>
                <li>Plant Layout</li>
                <li>Office Layout</li>
                <li>2D Layout</li>
                <li>Jig Design</li>
                {/* <li>Fixture Design</li> */}
              </ul>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="about-section">
          <h2>Industries We Serve</h2>
          <div className="industries">
            <span>Manufacturing</span>
            <span>Automotive</span>
            <span>Technology</span>
            <span>Real Estate</span>
            <span>Retail</span>
            <span>Healthcare</span>
            <span>Hospitality</span>
            <span>Finance</span>
            <span>Education</span>
            <span>E-commerce</span>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="about-section">
          <h2>Why We Stand Out</h2>
          <div className="differences">
            <div className="diff-item">
              <h4>🌐 Multi-Domain Expertise</h4>
              <p>Unlike competitors, we offer integrated solutions across mechanical, software, and interior design.</p>
            </div>
            <div className="diff-item">
              <h4>🔬 Proven Track Record</h4>
              <p>150+ successful projects delivered with consistently high client satisfaction rates.</p>
            </div>
            <div className="diff-item">
              <h4>💼 Tailored Approach</h4>
              <p>We customize every solution to match your unique business requirements and goals.</p>
            </div>
            <div className="diff-item">
              <h4>⏰ Timely Delivery</h4>
              <p>Our streamlined processes ensure on-time delivery without compromising quality.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
