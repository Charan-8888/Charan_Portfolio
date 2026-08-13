import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SectionHeading from '../components/ui/SectionHeading';

const SkillCard = ({ category, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card p-6 h-full"
  >
    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">
        {index + 1}
      </span>
      {category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 bg-secondary-background border border-border rounded-md text-sm text-secondary-text hover:text-white hover:border-accent/50 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary-background/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to build and secure applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard key={category} category={category} items={items} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
