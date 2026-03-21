import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import home_img from "../assets/home_image.jpeg";
import {
  serviceCategories,
  projectsData,
} from "../data/projectsData";
import "../styles/Home.css";

function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="home">
      {/* 1. Hero Section */}
      <HeroSection
        title="Transform Your Vision into Reality"
        subtitle="Mechanical Design, SPM Design, Software Development & IT Solutions"
        primaryBtn={{ text: "Get a Quote", link: "/contact" }}
        secondaryBtn={{ text: "View Projects", link: "/projects" }}
        image={home_img}
      />

      {/* 2. Why Choose Us (Split Layout) */}
      <section className="about-snapshot">
        <div className="container about-flex">
          <div className="about-image-side">
            <img 
              src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" 
              alt="Technical Engineering" 
            />
            <div className="quality-badge">
              <span className="badge-icon">⚙️</span>
              <span className="label">Precision <br/> Engineering</span>
            </div>
          </div>

          <div className="about-text-side">
            <span className="tagline">Our Philosophy</span>
            <h2>Innovative Solutions for Modern Challenges</h2>
            <p className="intro-text">
              As a fresh, dynamic team, we aren't bound by "how things used to be." 
              We bring the latest tools and dedicated personal attention to every project, 
              ensuring your vision is realized with absolute accuracy.
            </p>
            
            <div className="about-features-grid">
              <div className="feature-item">
                <strong>Personalized Focus</strong>
                <p>You work directly with the creators, not a middleman.</p>
              </div>
              <div className="feature-item">
                <strong>Modern Stack</strong>
                <p>Utilizing the latest CAD and Dev tools for efficiency.</p>
              </div>
              <div className="feature-item">
                <strong>Agile Delivery</strong>
                <p>Faster turnarounds through lean management.</p>
              </div>
              <div className="feature-item">
                <strong>End-to-End Support</strong>
                <p>From initial concept to final implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview (With Watermark) */}
      <section className="services-section">
        <div className="bg-watermark">TEKTONTECH</div> 
        <div className="container">
          <span className="tagline center">Expertise</span>
          <h2 className="center">Specialized Services</h2>
          <p className="section-subtitle">
            Delivering high-performance results across mechanical and digital domains.
          </p>
          <div className="services-grid">
            {serviceCategories.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <span className="tagline center">Portfolio</span>
          <h2 className="center">Featured Projects</h2>
          <p className="section-subtitle">A showcase of our latest designs & developments</p>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <Link to="/projects" className="view-all-btn">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Let's discuss how TektonTech Solutions can help bring your ideas to life.
          </p>
          <Link to="/contact" className="btn-large">
            Get In Touch 
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;