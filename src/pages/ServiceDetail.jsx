import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ServiceDetail.css';

function ServiceDetail() {
  const { serviceId } = useParams();

  const serviceDetails = {
    mechanical: {
      title: "Mechanical Design Services",
      icon: "⚙️",
      intro: "Transform your mechanical concepts into precise, manufacturable designs with our expert CAD and engineering services.",
      services: [
        {
          title: "CAD Design (2D & 3D)",
          description: "Professional CAD modeling in various software platforms including AutoCAD, CATIA, SolidWorks, and Inventor."
        },
        {
          title: "Product Design & Development",
          description: "End-to-end product design from concept to prototype, including design optimization and testing."
        },
        {
          title: "Manufacturing Drawings",
          description: "Detailed manufacturing and assembly drawings with complete technical specifications and tolerances."
        },
        {
          title: "Reverse Engineering",
          description: "Extract design information from existing products for modification, replication, or improvement."
        },
        {
          title: "FEA & Simulation",
          description: "Finite Element Analysis and simulation using ANSYS, CFX, and other leading software."
        },
        {
          title: "Sheet Metal & Welding Designs",
          description: "Specialized designs for sheet metal fabrication and welded assemblies."
        }
      ],
      tools: ["AutoCAD", "CATIA", "SolidWorks", "Inventor", "ANSYS"],
      industries: ["Automotive", "Manufacturing", "Machinery"],
      process: "We follow a rigorous process including conceptual design, detailed design, analysis, validation, and documentation to ensure your product is ready for manufacturing."
    },
    software: {
      title: "Software & IT Solutions",
      icon: "💻",
      intro: "Innovative software solutions tailored to streamline your business operations and enhance digital presence.",
      services: [
        {
          title: "Web Development",
          description: "Responsive, scalable web applications built with modern frameworks and best practices."
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android platforms."
        },
        {
          title: "ERP Solutions",
          description: "Enterprise Resource Planning systems to integrate and manage core business processes."
        },
        {
          title: "CRM Systems",
          description: "Customer Relationship Management platforms to enhance customer engagement and retention."
        },
        {
          title: "UI/UX Design",
          description: "User-centric design approach creating intuitive and engaging interfaces."
        },
        {
          title: "Cloud Solutions",
          description: "AWS, Azure, and Google Cloud solutions for scalability and reliability."
        }
      ],
      tools: ["React", "Angular", "Vue.js", "Node.js", "Python", "Java", "AWS", "Azure", "Docker", "Kubernetes"],
      industries: ["E-commerce", "Finance", "Healthcare", "Education", "Retail", "SaaS"],
      process: "Our development methodology includes requirements gathering, architecture design, agile development, testing, and continuous deployment with post-launch support."
    },
    interior: {
      title: "Interior Design Services",
      icon: "🎨",
      intro: "Create beautiful, functional spaces that reflect your style and enhance your lifestyle or business environment.",
      services: [
        {
          title: "Residential Interiors",
          description: "Complete interior design for homes including living spaces, bedrooms, kitchens, and bathrooms."
        },
        {
          title: "Commercial Interiors",
          description: "Professional office spaces, retail stores, restaurants, and hospitality design solutions."
        },
        {
          title: "3D Visualization",
          description: "Photorealistic 3D renderings to visualize designs before implementation."
        },
        {
          title: "Space Planning",
          description: "Optimal space utilization with ergonomic and aesthetic considerations."
        },
        {
          title: "Material & Furniture Selection",
          description: "Expert guidance on selecting premium materials and furniture that match your vision and budget."
        },
        {
          title: "Project Management",
          description: "End-to-end project management from concept to final installation and handover."
        }
      ],
      tools: ["SketchUp", "AutoCAD", "3D Studio Max", "Photoshop", "Revit", "Lumion"],
      industries: ["Residential", "Commercial", "Healthcare", "Hospitality", "Retail", "Corporate"],
      process: "We begin with consultation and space assessment, create 3D visualizations, finalize designs with your feedback, source materials, and manage professional installation."
    }
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    return <div className="service-detail"><p>Service not found</p></div>;
  }

  return (
    <div className="service-detail">
      <div className="service-hero">
        <span className="service-icon">{service.icon}</span>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
      </div>

      <div className="service-container">
        {/* Services Offered */}
        <section className="service-section">
          <h2>What We Offer</h2>
          <div className="services-list">
            {service.services.map((svc, idx) => (
              <div key={idx} className="service-item">
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="service-section">
          <h2>Tools & Technologies</h2>
          <div className="tools-list">
            {service.tools.map((tool, idx) => (
              <span key={idx} className="tool-badge">{tool}</span>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="service-section">
          <h2>Industries We Serve</h2>
          <div className="industries-list">
            {service.industries.map((industry, idx) => (
              <span key={idx} className="industry-badge">{industry}</span>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="service-section">
          <h2>Our Approach</h2>
          <p className="process-text">{service.process}</p>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can deliver the perfect solution for your project.</p>
          <a href="/contact" className="btn btn-primary">Contact Our Team</a>
        </section>
      </div>
    </div>
  );
}

export default ServiceDetail;
