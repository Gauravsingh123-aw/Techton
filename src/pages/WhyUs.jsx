import React from 'react';
import { whyChooseUs } from '../data/content';
import '../styles/WhyUs.css';

function WhyUs() {
  return (
    <div className="why-us">
      <div className="why-us-hero">
        <h1>Why Choose TektonTech Solutions?</h1>
        <p>Discover what sets us apart from the competition</p>
      </div>

      <div className="why-us-container">
        {/* Main Highlights */}
        <section className="highlights-grid">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        {/* Detailed Comparison */}
        {/* <section className="comparison-section">
          <h2>How We Compare</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Tekton Tech</th>
                  <th>Traditional Agencies</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Multi-domain expertise</td>
                  <td className="check">✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Integrated solutions</td>
                  <td className="check">✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Cost efficiency</td>
                  <td className="check">✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Quality assurance</td>
                  <td className="check">✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Post-project support</td>
                  <td className="check">✓</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>Transparent communication</td>
                  <td className="check">✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Timeline adherence</td>
                  <td className="check">✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td>Industry experience</td>
                  <td>15+ years</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        {/* Client Success Stories */}
        {/* <section className="success-metrics">
          <h2>Our Track Record</h2>
          <div className="metrics-grid">
            <div className="metric">
              <h3>150+</h3>
              <p>Projects Successfully Delivered</p>
            </div>
            <div className="metric">
              <h3>80+</h3>
              <p>Satisfied Clients Worldwide</p>
            </div>
            <div className="metric">
              <h3>98%</h3>
              <p>Client Satisfaction Rate</p>
            </div>
            <div className="metric">
              <h3>45+</h3>
              <p>Expert Team Members</p>
            </div>
          </div>
        </section> */}

        {/* Our Commitment */}
        <section className="commitment-section">
          <h2>Our Commitment to You</h2>
          <div className="commitment-list">
            <div className="commitment-item">
              <h4>1. Transparent Pricing</h4>
              <p>No hidden costs. We provide detailed quotes and explain every charge upfront.</p>
            </div>
            <div className="commitment-item">
              <h4>2. Quality Guarantee</h4>
              <p>We stand behind our work with rigorous quality checks and revisions until you're satisfied.</p>
            </div>
            <div className="commitment-item">
              <h4>3. Timely Delivery</h4>
              <p>Respect for your timeline is paramount. We deliver on schedule or communicate delays immediately.</p>
            </div>
            <div className="commitment-item">
              <h4>4. Dedicated Support</h4>
              <p>From kickoff to after launch, you have a dedicated team supporting your project.</p>
            </div>
            <div className="commitment-item">
              <h4>5. Innovation & Learning</h4>
              <p>We stay updated with latest technologies and methodologies to bring cutting-edge solutions.</p>
            </div>
            <div className="commitment-item">
              <h4>6. Long-term Partnership</h4>
              <p>We view clients as partners and strive for long-term, mutually beneficial relationships.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WhyUs;
