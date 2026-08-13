import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import SectionHeading from '../components/ui/SectionHeading';
import { Code, Terminal, Shield, Database } from 'lucide-react';

const StatCard = ({ label, value, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card p-6 border-border flex flex-col items-center justify-center text-center"
  >
    <div className="text-3xl font-bold text-white mb-2 font-mono">{value}</div>
    <div className="text-sm text-secondary-text">{label}</div>
  </motion.div>
);

const InterestBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-secondary-background border border-border rounded-lg text-sm text-secondary-text">
    <Icon className="w-4 h-4 text-accent" />
    <span>{label}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="About Me" 
          subtitle="My background, interests, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main About Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-lg text-secondary-text leading-relaxed"
          >
            <p>
              I'm <strong className="text-white">Charan</strong>, a Computer Science student and aspiring Full-Stack Developer. 
              I enjoy building web applications using modern technologies such as React, Django, Python, and PostgreSQL.
            </p>
            <p>
              Alongside web development, I have a deep interest in <strong className="text-white">Cybersecurity, Linux, Networking, Operating Systems, and Artificial Intelligence</strong>.
            </p>
            <p>
              My philosophy is simple: I want to understand not only how applications are built, but also how the underlying systems and infrastructure work to make them run securely and efficiently.
            </p>

            <div className="pt-6">
              <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" /> Core Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                <InterestBadge icon={Code} label="Full-Stack Dev" />
                <InterestBadge icon={Shield} label="Cybersecurity" />
                <InterestBadge icon={Terminal} label="Linux & OS" />
                <InterestBadge icon={Database} label="System Design" />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {Object.entries(personal.stats).map(([label, value], index) => (
              <StatCard key={label} label={label} value={value} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
