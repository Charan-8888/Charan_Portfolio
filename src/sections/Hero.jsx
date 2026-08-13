import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Button from '../components/ui/Button';
import { ArrowRight, Terminal as TerminalIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-sm mb-6 inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {personal.greeting}
          </motion.div>

          <h1 className="heading-lg mb-6 leading-tight">
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Secure, Scalable</span>, and Modern Web Applications.
          </h1>

          <p className="text-secondary-text text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            {personal.introduction}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects" icon={ArrowRight}>
              View My Work
            </Button>
            <Button variant="outline" href="#contact">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="glass-card p-6 border-accent/20 bg-card/60 backdrop-blur-xl rounded-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="flex-1 flex justify-center text-xs font-mono text-secondary-text">
                charan@portfolio:~
              </div>
            </div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="flex gap-2 text-secondary-text">
                <span className="text-accent">charan@portfolio:~$</span>
                <span className="text-white typing-effect">whoami</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-white space-y-1 pl-2 border-l-2 border-border ml-2 py-2"
              >
                <p className="text-green-400">&gt; Full-Stack Developer</p>
                <p className="text-blue-400">&gt; Cybersecurity Enthusiast</p>
                <p className="text-purple-400">&gt; Systems Explorer</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex gap-2 text-secondary-text mt-4"
              >
                <span className="text-accent">charan@portfolio:~$</span>
                <span className="w-2 h-4 bg-white/70 inline-block animate-pulse" />
              </motion.div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-card border border-border p-4 rounded-xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
              <TerminalIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-secondary-text font-mono">Status</p>
              <p className="text-sm font-bold text-white">Actively Learning</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
