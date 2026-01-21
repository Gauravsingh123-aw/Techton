import React from 'react';
import { processSteps } from '../data/content';
import '../styles/Process.css';

function Process() {
  return (
    <div className="process">
      <div className="process-hero">
        <h1>How We Work</h1>
        <p>Our systematic and transparent process ensures quality results every time</p>
      </div>

      <div className="process-container">
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {step.number < processSteps.length && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        {/* Why This Process */}
        <section className="process-benefits">
          <h2>Why This Process?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>🎯 Clear Objectives</h3>
              <p>We start by thoroughly understanding your needs and goals before proceeding with any work.</p>
            </div>
            <div className="benefit-card">
              <h3>📋 Detailed Planning</h3>
              <p>Comprehensive planning ensures we stay on track and deliver within budget and timeline.</p>
            </div>
            <div className="benefit-card">
              <h3>🔄 Quality Iterations</h3>
              <p>Multiple review cycles guarantee that the final product meets your expectations.</p>
            </div>
            <div className="benefit-card">
              <h3>📞 Ongoing Support</h3>
              <p>We don't disappear after delivery - we provide continuous support and maintenance.</p>
            </div>
          </div>
        </section>

        {/* Timeline Expectation */}
        <section className="timeline-section">
          <h2>Typical Project Timeline</h2>
          <div className="timeline-info">
            <div className="timeline-item">
              <h4>Small Projects (1-2 months)</h4>
              <p>Product designs, web pages, small interiors</p>
            </div>
            <div className="timeline-item">
              <h4>Medium Projects (2-4 months)</h4>
              <p>Complete product development, web applications, office designs</p>
            </div>
            <div className="timeline-item">
              <h4>Large Projects (4+ months)</h4>
              <p>Complex systems, enterprise software, comprehensive renovations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Process;
