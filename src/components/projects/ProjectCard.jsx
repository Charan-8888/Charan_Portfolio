import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const ProjectCard = ({ project, index }) => {
  const isAparna = project.id === 'aparna-aura';
  const hasLive = project.liveUrl && project.liveUrl !== '#';

  // For Aparna Aura: entire card is clickable and redirects to the live site
  if (isAparna) {
    return (
      <motion.a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card overflow-hidden group flex flex-col h-full cursor-pointer hover:border-accent/50 transition-colors"
      >
        {/* Image banner */}
        <div className="relative h-52 border-b border-border overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-card to-background flex items-center justify-center">
              <span className="font-mono text-6xl font-bold text-white/5 group-hover:scale-110 group-hover:text-white/10 transition-all duration-500 select-none">
                AA
              </span>
            </div>
          )}
          {/* Live badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-xs font-bold backdrop-blur-md">
            <ExternalLink className="w-3 h-3" />
            Live Site
          </div>
        </div>

        <div className="p-7 flex flex-col flex-grow">
          <div className="text-accent text-sm font-mono mb-2">{project.category}</div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
          <p className="text-secondary-text mb-5 flex-grow">{project.shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
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

          <div className="flex items-center gap-2 mt-auto pt-5 border-t border-border/50 text-accent font-medium text-sm">
            <ExternalLink className="w-4 h-4" />
            Click to visit live site →
          </div>
        </div>
      </motion.a>
    );
  }

  // For all other projects: no image, only Details button
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div className="text-accent text-sm font-mono">{project.category}</div>
          {project.status === 'building' && (
            <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              In Development
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-secondary-text mb-5 flex-grow">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
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

        <div className="mt-auto pt-5 border-t border-border/50">
          <Button variant="primary" to={`/projects/${project.id}`} className="w-full py-2.5 text-sm">
            Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
