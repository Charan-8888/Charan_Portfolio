import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Shield, Code, Terminal, Cpu } from 'lucide-react';

const learningAreas = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    description: "Learning Linux, networking, system security, and security tools.",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: Code,
    description: "Building scalable applications using React, Django, and PostgreSQL.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    id: "os",
    title: "Operating Systems",
    icon: Terminal,
    description: "Building ShellForge to understand processes, command execution, and Linux system programming.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: Cpu,
    description: "Exploring LLMs, local AI models, and personal AI assistant systems.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  }
];

const CurrentlyLearning = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Currently Building & Learning" 
          subtitle="Areas I am actively exploring and expanding my knowledge in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 md:p-8 flex items-start gap-6 group hover:border-accent/50 transition-colors`}
              >
                <div className={`shrink-0 p-4 rounded-xl ${area.bg} ${area.border} border group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-secondary-text leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
