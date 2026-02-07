import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ServiceDetail.css';
import mech_banner from '../assets/mech_banner.jpg'
import soft_banner from '../assets/soft_banner.jpg'
import layout_banner from '../assets/layout_banner.jpg'


function ServiceDetail() {
  const { serviceId } = useParams();

  const serviceDetails = {
    mechanical: {
      title: "Mechanical Design Services",
      icon: "⚙️",
      intro: "Transform your mechanical concepts into precise, manufacturable designs with our expert CAD and engineering services.",
      services: [
        {
          title: "CAD Design",
          description: "CAD solutions built for performance and manufacturability.Accurate designs for reliable manufacturing.Engineering-driven CAD design for real-world applications.Optimized designs. Reduced errors , better results."
        },
        {
          title: "JIG AND FIXTURES DESIGN & DEVELOPMENT",
          description: "Precision Jig & Fixture Design for Accurate Manufacturing.Designing Jigs and Fixtures for Efficiency, Accuracy, and Reliability."
        },
        {
          title: "Detailed drafting and manufacturing drawings",
          description: "Detailed manufacturing and assembly drawings with complete technical specifications and tolerances."
        },
        {
          title: "Reverse Engineering",
          description: "Extract design information from existing products for modification, replication, or improvement."
        },
        {
          title: "FEA",
          description: "Finite Element Analysis and simulation using ANSYS, CFX, and other leading software."
        },
        // {
        //   title: "Sheet Metal & Welding Designs",
        //   description: "Specialized designs for sheet metal fabrication and welded assemblies."
        // }
      ],
      tools: ["AutoCAD", "CATIA", "SolidWorks",  "ANSYS"],
      industries: ["Automotive", "Manufacturing"],
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
      title: "Layout Design Services",
      icon: "🎨",
      intro: "Create beautiful, functional spaces that reflect your style and enhance your lifestyle or business environment.",
      services: [
        {
          title: "Office and Plant Layout",
          description: "Smart Office and Plant Layouts Designed for Efficiency and Growth. Optimizing Space, Flow, and Productivity Through Intelligent Layout Design.Workplace Design to Meets Operational Efficiency.Engineering Layouts that Support People, Process, and Performance."
        },
        {
          title: "2D Layout",
          description: "Well-designed 2D, office, and plant layouts ensure smooth operational flow while minimizing movement and maximizing output"
        },
        // {
        //   title: "JIG Design",
        //   description: "Photorealistic 3D renderings to visualize designs before implementation."
        // },
        // {
        //   title: "Fixture Design",
        //   description: "Optimal space utilization with ergonomic and aesthetic considerations."
        // },
        
        // {
        //   title: "Space Planning",
        //   description: "Optimal space utilization with ergonomic and aesthetic consideration."
        // }
      ],
      tools: ["SketchUp", "AutoCAD"],
      industries: ["Residential", "Commercial", "Healthcare", "Hospitality", "Retail", "Corporate"],
      process: "We begin with consultation and space assessment, create 3D visualizations, finalize designs with your feedback, source materials, and manage professional installation."
    }
  };

  const service = serviceDetails[serviceId];
  let banner;
  if(service.title==="Software & IT Solutions"){
    banner=soft_banner;
  }
  else if(service.title=="Mechanical Design Services"){
    banner=mech_banner;
  }
  else if(service.title=="Layout Design Services"){
    banner=layout_banner;
  }

  if (!service) {
    return <div className="service-detail"><p>Service not found</p></div>;
  }

  return (
    <div className="service-detail">
      <div className="service-hero">
        <img className="img-banner" src={banner} alt="Service Banner" />
        <div className="overlay">
          <span className="service-icon">{service.icon}</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
        </div>
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
