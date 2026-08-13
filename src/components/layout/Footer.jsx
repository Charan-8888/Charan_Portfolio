import React from 'react';
import { personal } from '../../data/personal';
import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-background border-t border-border py-12 mt-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold font-mono text-white mb-1">{personal.name}</h3>
          <p className="text-secondary-text text-sm">
            {personal.title.split('&').map((part, index) => (
              <span key={index}>
                {part.trim()}
                {index === 0 && <br className="hidden md:block" />}
                {index === 0 && <span className="md:hidden"> & </span>}
              </span>
            ))}
          </p>
        </div>

        <div className="flex gap-4">
          <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-lg text-secondary-text hover:text-white hover:border-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-lg text-secondary-text hover:text-white hover:border-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personal.contact.email}`} className="p-2 bg-card border border-border rounded-lg text-secondary-text hover:text-white hover:border-accent transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      <div className="container mx-auto px-6 max-w-7xl mt-8 pt-8 border-t border-border/50 text-center text-sm text-secondary-text">
        <p>© {currentYear} {personal.name}. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
