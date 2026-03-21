import React from 'react';
import { processSteps } from '../data/content';
import '../styles/Process.css';

function Process() {
  return (
    <div className="process-page">
      {/* 1. High-Contrast Hero */}
      <div className="process-hero">
        <div className="container">
          <span className="premium-tag">Our Methodology</span>
          <h1>How We <span>Work</span></h1>
          <p>A systematic, transparent, and precision-driven approach to every project.</p>
        </div>
      </div>

      <div className="container">
        {/* 2. Vertical Roadmap Style Steps */}
        <section className="process-roadmap">
          <div className="roadmap-line"></div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={step.number} className="process-step">
                <div className="step-number-box">
                  <span className="step-num">{step.number}</span>
                </div>
                <div className="step-content">
                  <span className="step-label">Phase 0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Why This Process - Balanced Gaps */}
        <section className="process-benefits">
          <h2 className="rich-title">Why This Process?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">🎯</span>
              <h4>Clear Objectives</h4>
              <p>We anchor every project with defined goals before the first draft.</p>
            </div>
            <div className="benefit-card featured">
              <span className="benefit-icon">📋</span>
              <h4>Detailed Planning</h4>
              <p>Comprehensive roadmaps to ensure budget and timeline adherence.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🔄</span>
              <h4>Quality Iterations</h4>
              <p>Rigorous review cycles to guarantee manufacturing-grade results.</p>
            </div>
          </div>
        </section>

        {/* 4. Project Timeline - Premium Dashboard Style */}
        <section className="timeline-section">
          <h2 className="rich-title">Typical Project Timelines</h2>
          <div className="timeline-dashboard">
            <div className="timeline-item">
              <div className="time-header">1-2 Months</div>
              <h4>Small Scale</h4>
              <p>Product designs, web pages, and rapid prototyping.</p>
            </div>
            <div className="timeline-item highlight">
              <div className="time-header">2-4 Months</div>
              <h4>Medium Scale</h4>
              <p>Complete SPM development & enterprise web apps.</p>
            </div>
            <div className="timeline-item">
              <div className="time-header">4+ Months</div>
              <h4>Complex Systems</h4>
              <p>Full plant layouts and integrated software ecosystems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Process;