import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import home_img from "../assets/home_image.jpeg"
import {
  serviceCategories,
  projectsData,
  testimonials,
  stats,
} from "../data/projectsData";
import "../styles/Home.css";

function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection
        title="Transform Your Vision into Reality"
        subtitle="Mechanical Design, SPM Design, Software Development & IT Solutions and Layout Design"
        primaryBtn={{ text: "Get a Quote", link: "/contact" }}
        secondaryBtn={{ text: "View Projects", link: "/projects" }}
        image={home_img}
      />

      {/* About Snapshot */}
      <section className="about-snapshot">
        <div className="container">
          <h2>Why Choose TektonTech Solutions?</h2>
          <p className="intro-text">
            "As a growing team, we focus on giving each project the personal
            attention it deserves. You won’t be just another client — we’ll work
            closely with you to understand your goals and bring them to
            life."{" "}
          </p>
          {/* <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions across multiple domains
          </p>
          <div className="services-grid">
            {serviceCategories.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Designs & Developments</p>
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

      {/* Testimonials */}
      {/* <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">{"⭐".repeat(testimonial.rating)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <p className="testimonial-meta">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Let's discuss how TektonTech Solutions can help bring your ideas to
            life.
          </p>
          <Link to="/contact" className="btn btn-large">
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
