import React from 'react';
import { motion } from 'framer-motion';
import { journey } from '../data/journey';
import SectionHeading from '../components/ui/SectionHeading';

const Journey = () => {
  return (
    <section id="journey" className="py-24 bg-secondary-background/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Development Journey" 
          subtitle="My progression in learning and building."
        />

        <div className="max-w-3xl mx-auto">
          {journey.map((period, periodIndex) => (
            <div key={period.year} className="mb-12 relative">
              {/* Year Label */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold font-mono text-white mb-6 pl-8 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />
                {period.year}
              </motion.div>

              {/* Timeline Line (vertical) */}
              {periodIndex !== journey.length - 1 && (
                <div className="absolute left-[7px] top-8 bottom-[-48px] w-0.5 bg-border z-0" />
              )}
              {periodIndex === journey.length - 1 && (
                <div className="absolute left-[7px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-border to-transparent z-0" />
              )}

              <div className="space-y-4 pl-12">
                {period.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: eventIndex * 0.1 }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent/50" />
                    <span className="text-secondary-text">{event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
