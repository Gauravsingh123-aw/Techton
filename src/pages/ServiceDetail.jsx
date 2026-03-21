import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ServiceDetail.css';

function ServiceDetail() {
  const { serviceId } = useParams();

  const serviceDetails = {
    mechanical: {
      title: "Mechanical & SPM Design",
      subtitle: "Precision Engineering",
      intro: "Transforming complex mechanical concepts into high-performance, manufacturable designs with industry-leading CAD expertise.",
      services: [
        { title: "Advanced CAD Design", description: "Performance-driven solutions optimized for real-world manufacturing and structural integrity." },
        { title: "Jig & Fixture Development", description: "Precision-engineered tooling designed to enhance production efficiency and repeatability." },
        { title: "Technical Drafting", description: "Comprehensive manufacturing and assembly drawings with exact tolerances and specifications." },
        { title: "Reverse Engineering", description: "Precise extraction of design data from existing components for optimization or replication." },
        { title: "FEA & Simulation", description: "Advanced stress and flow analysis using ANSYS to ensure safety and longevity." },
        { title: "Custom SPM Design", description: "Special Purpose Machinery built for smart automation and industrial growth." }
      ],
      tools: ["AutoCAD", "CATIA", "SolidWorks", "ANSYS"],
      industries: ["Automotive", "Aerospace", "Industrial Manufacturing"],
      process: "Conceptual Design → Detailed Analysis → Validation → Technical Documentation"
    },
    software: {
      title: "Software & IT Solutions",
      subtitle: "Digital Transformation",
      intro: "Tailored digital ecosystems designed to streamline operations and scale your enterprise presence.",
      services: [
        { title: "Web Architecture", description: "Scalable, high-performance web applications built with modern enterprise frameworks." },
        { title: "Mobile Ecosystems", description: "Seamless iOS and Android applications focused on user retention and performance." },
        { title: "ERP Integration", description: "Centralized systems to unify complex business processes and data streams." },
        { title: "Custom CRM", description: "Data-driven relationship management platforms built for conversion and clarity." },
        { title: "UI/UX Strategy", description: "User-centric interface design that balances aesthetic beauty with functional intuition." },
        { title: "Cloud Infrastructure", description: "Secure AWS and Azure deployments designed for 99.9% uptime and global scale." }
      ],
      tools: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
      industries: ["SaaS", "E-commerce", "Healthcare", "Fintech"],
      process: "Architecture Design → Agile Sprinting → QA Testing → Cloud Deployment"
    },
    interior: {
      title: "Layout Design Services",
      subtitle: "Space Optimization",
      intro: "Intelligent spatial planning that maximizes operational flow and reflects corporate identity.",
      services: [
        { title: "Industrial Plant Layout", description: "Optimizing material flow and machinery placement to minimize downtime and maximize output." },
        { title: "Corporate Office Design", description: "Modern workplace layouts designed to foster collaboration and employee productivity." },
        { title: "2D/3D Spatial Mapping", description: "Precision layouts that ensure every square inch of your facility is utilized effectively." }
      ],
      tools: ["SketchUp", "AutoCAD", "Revit"],
      industries: ["Manufacturing Plants", "Corporate Real Estate", "Retail"],
      process: "Site Assessment → 3D Visualization → Feedback Loop → Implementation"
    }
  };

  const service = serviceDetails[serviceId];

  if (!service) return <div className="service-detail"><p>Service not found</p></div>;

  let banner = serviceId === 'software' ? "https://res.cloudinary.com/dldz286xx/image/upload/v1774122488/steptodown.com496647_vrqhsx.jpg" :
               serviceId === 'mechanical' ? "https://res.cloudinary.com/dldz286xx/image/upload/v1773746103/mech_banner_xg1z37.jpg":
               "https://res.cloudinary.com/dldz286xx/image/upload/v1773746103/layout_banner_kojxqg.jpg"

  return (
    <div className="service-detail-page">
      <div className="detail-hero">
        <img className="hero-banner-img" src={banner} alt={service.title} />
        <div className="hero-overlay-content">
          <div className="container">
            <span className="premium-tag">{service.subtitle}</span>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Main Service Grid */}
        <section className="detail-section">
          <div className="section-header-left">
            <span className="accent-text">Capabilities</span>
            <h2>Our Core Services</h2>
          </div>
          <div className="detail-grid">
            {service.services.map((svc, idx) => (
              <div key={idx} className="detail-card">
                <span className="detail-num">0{idx + 1}</span>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech & Industries Sidebar Style */}
        <section className="tech-industry-section">
          <div className="tech-box">
            <h4>Technology Stack</h4>
            <div className="badge-cloud">
              {service.tools.map(tool => <span key={tool} className="tech-badge">{tool}</span>)}
            </div>
          </div>
          <div className="industry-box">
            <h4>Sectors Served</h4>
            <div className="badge-cloud">
              {service.industries.map(ind => <span key={ind} className="ind-badge">{ind}</span>)}
            </div>
          </div>
        </section>

        {/* The Approach - Blueprint Style */}
        <section className="approach-section">
          <div className="approach-card">
            <div className="approach-content">
              <h3>The Strategy</h3>
              <p>{service.process}</p>
            </div>
            <Link to="/contact" className="approach-cta">
              Discuss Your Project <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServiceDetail;