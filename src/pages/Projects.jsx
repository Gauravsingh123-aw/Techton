import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const categories = ['All', 'Mechanical', 'Software', 'Interior'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="projects">
      <div className="projects-hero">
        <h1>Our Projects & Portfolio</h1>
        <p>Showcase of our expertise across Mechanical Design, Software Development, and Interior Design</p>
      </div>

      <div className="projects-container">
        {/* Filter */}
        <div className="filter-section">
          <h3>Filter by Category:</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
