import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import SectionHeading from '../components/ui/SectionHeading';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-24 bg-secondary-background/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Education & Coursework" 
          subtitle="Academic background and key areas of study."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Degree Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              Academic Degree
            </h3>
            <div className="space-y-6">
              {personal.education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 border-l-4 border-l-accent"
                >
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-accent font-medium mt-1">{edu.major}</p>
                  <p className="text-secondary-text mt-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-text" />
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              Relevant Coursework
            </h3>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="flex flex-wrap gap-3">
                {personal.relevantCoursework.map((course, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-secondary-text hover:text-white hover:border-accent/50 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
