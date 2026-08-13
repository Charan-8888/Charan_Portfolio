import React from 'react';
import { projects } from '../data/projects';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best work across web development, systems programming, and AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
