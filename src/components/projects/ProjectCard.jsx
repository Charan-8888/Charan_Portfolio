import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../ui/Icons';
import Button from '../ui/Button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-64 bg-secondary-background border-b border-border overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-background">
            <span className="font-mono text-4xl font-bold text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-500">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        
        {/* Status Badge */}
        {project.status === 'building' && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-full text-xs font-bold backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            In Development
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="text-accent text-sm font-mono mb-2">{project.category}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-secondary-text mb-6 flex-grow">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-mono text-secondary-text bg-background px-2 py-1 rounded border border-border">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-mono text-secondary-text bg-background px-2 py-1 rounded border border-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
          <Button variant="primary" to={`/projects/${project.id}`} className="flex-1 py-2 text-sm">
            Details
          </Button>
          
          <div className="flex gap-2">
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary-text hover:text-white hover:border-accent transition-colors" aria-label="GitHub Repository">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary-text hover:text-white hover:border-accent transition-colors" aria-label="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
