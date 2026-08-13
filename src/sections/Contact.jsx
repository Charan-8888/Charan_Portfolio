import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call or EmailJS submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          title="Let's Build Something Together" 
          subtitle="Have a project, idea, or opportunity? Feel free to reach out."
        />

        <div className="max-w-2xl mx-auto glass-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-secondary-text">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary-text">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-secondary-text">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-secondary-text">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-4"
              disabled={status === 'submitting'}
              icon={status === 'idle' ? Send : null}
            >
              {status === 'idle' && "Send Message"}
              {status === 'submitting' && "Sending..."}
              {status === 'success' && <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Message Sent</span>}
              {status === 'error' && <span className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Error Sending</span>}
            </Button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
