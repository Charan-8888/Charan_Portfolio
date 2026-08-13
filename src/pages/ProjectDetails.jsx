import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon as Github } from '../components/ui/Icons';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-secondary-text mb-8">The project you are looking for doesn't exist or has been moved.</p>
        <Button onClick={() => navigate('/')} icon={ArrowLeft}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link to="/#projects" className="inline-flex items-center gap-2 text-secondary-text hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-accent font-mono text-sm px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                {project.category}
              </span>
              {project.status === 'building' && (
                <span className="text-yellow-500 font-mono text-sm px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  In Development
                </span>
              )}
            </div>
            <h1 className="heading-lg mb-6">{project.title}</h1>
            <p className="text-xl text-secondary-text leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {project.liveUrl && project.liveUrl !== '#' && (
              <Button href={project.liveUrl} icon={ExternalLink}>Live Demo</Button>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <Button variant="secondary" href={project.githubUrl} icon={Github}>View Source</Button>
            )}
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden border border-border mb-16"
          >
             {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             ) : (
                <div className="absolute inset-0 bg-secondary-background flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-white/10 font-mono mb-2">{project.title.substring(0, 2).toUpperCase()}</span>
                  <span className="text-secondary-text text-sm">Image Placeholder</span>
                </div>
             )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary-text">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.challenges && project.challenges.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-white mb-6">Challenges Overcome</h2>
                  <ul className="list-disc list-inside space-y-2 text-secondary-text ml-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm text-secondary-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Simple Architecture Diagram Visualization (CSS-based) */}
              <div className="glass-card p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-6 text-left">Architecture Overview</h3>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-full py-2 bg-accent/20 border border-accent/50 rounded text-accent font-mono text-sm">Frontend</div>
                  <div className="w-px h-6 bg-border" />
                  <div className="w-full py-2 bg-background border border-border rounded text-secondary-text font-mono text-sm">REST API</div>
                  <div className="w-px h-6 bg-border" />
                  <div className="w-full py-2 bg-blue-500/20 border border-blue-500/50 rounded text-blue-400 font-mono text-sm">Backend</div>
                  <div className="w-px h-6 bg-border" />
                  <div className="w-full py-2 bg-green-500/20 border border-green-500/50 rounded text-green-400 font-mono text-sm">Database</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
