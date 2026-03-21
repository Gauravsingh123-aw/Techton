import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-badge">{project.category}</div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        
        <div className="project-details">
          <div className="detail-row">
            <span className="detail-label">Challenge:</span>
            <p>{project.problem}</p>
          </div>
          <div className="detail-row">
            <span className="detail-label">Solution:</span>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="tools-container">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="tool-pill">{tool}</span>
          ))}
        </div>
        
        <Link to={`/projects/${project.id}`} className="project-link">
          View Case Study <span>→</span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;