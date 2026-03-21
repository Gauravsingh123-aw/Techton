import React from 'react';
import { whyChooseUs } from '../data/content';
import '../styles/WhyUs.css';

function WhyUs() {
  return (
    <div className="why-us-page">
      {/* 1. Hero Section - Consistent with About Theme */}
      <div className="why-us-hero">
        <div className="container">
          <span className="premium-tag">The TektonTech Advantage</span>
          <h1>Why Partner With <span>Us?</span></h1>
          <p>We combine industrial precision with modern digital agility to deliver results that move the needle.</p>
        </div>
      </div>

      <div className="container">
        {/* 2. Main Highlights - Grid with Depth */}
        <section className="highlights-section">
          <div className="highlights-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="card-line"></div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Comparison Section - Dark Industrial Style */}
        {/* <section className="comparison-section">
          <div className="section-header">
            <span className="accent-text">Transparency</span>
            <h2>How We Compare</h2>
          </div>
          <div className="comparison-container">
            <table className="rich-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>TektonTech Solutions</th>
                  <th>Traditional Agencies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-domain expertise</td>
                  <td className="check-cell">✓ Full Integration</td>
                  <td className="cross-cell">✗ Single Focus</td>
                </tr>
                <tr>
                  <td>Integrated solutions</td>
                  <td className="check-cell">✓ End-to-End</td>
                  <td className="cross-cell">✗ Fragmented</td>
                </tr>
                <tr>
                  <td>Cost efficiency</td>
                  <td className="check-cell">✓ Optimized ROI</td>
                  <td className="cross-cell">✗ High Overheads</td>
                </tr>
                <tr>
                  <td>Quality assurance</td>
                  <td className="check-cell">✓ ISO Standards</td>
                  <td className="check-cell">✓ Standard</td>
                </tr>
                <tr>
                  <td>POST-Project Support</td>
                  <td className="check-cell">✓ 24/7 Dedicated</td>
                  <td className="cross-cell">✗ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        {/* 4. Success Metrics - High-Impact Band */}
        {/* <section className="metrics-section">
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-num">150+</span>
              <p>Projects Delivered</p>
            </div>
            <div className="metric-item">
              <span className="metric-num">98%</span>
              <p>Satisfaction Rate</p>
            </div>
            <div className="metric-item">
              <span className="metric-num">2026</span>
              <p>Modern Vision</p>
            </div>
          </div>
        </section> */}

        {/* 5. Our Commitment - Numbered List Style */}
        <section className="commitment-section">
          <h2 className="rich-title">Our Commitment to You</h2>
          <div className="commitment-grid">
            {[
              { t: "Transparent Pricing", d: "No hidden costs. Detailed quotes and upfront explanations." },
              { t: "Quality Guarantee", d: "Rigorous quality checks and revisions until satisfaction." },
              { t: "Timely Delivery", d: "We respect your timeline. On schedule, every time." },
              { t: "Dedicated Support", d: "A dedicated team from kickoff to post-launch." },
              { t: "Innovation First", d: "Using the latest tech to bring cutting-edge solutions." },
              { t: "Long-term Partnership", d: "We view clients as partners, not just customers." }
            ].map((item, i) => (
              <div key={i} className="commitment-card">
                <span className="commit-num">0{i + 1}</span>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyUs;