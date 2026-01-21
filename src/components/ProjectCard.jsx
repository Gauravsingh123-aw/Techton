import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <span className="project-category">{project.category}</span>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="problem"><strong>Challenge:</strong> {project.problem}</p>
        <p className="solution"><strong>Solution:</strong> {project.solution}</p>
        <div className="tools">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="tool-tag">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
