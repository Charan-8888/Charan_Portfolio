import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Journey', path: '/#journey' },
  { name: 'Contact', path: '/#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2 z-50" onClick={() => handleNavClick('/')}>
          <span className="text-accent">&lt;</span>
          Charan
          <span className="text-accent">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-secondary-text hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button className="text-secondary-text hover:text-accent transition-colors" aria-label="Open Terminal">
            <Terminal className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40 md:hidden pt-20"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-2xl font-bold text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button className="flex items-center gap-2 text-xl font-bold text-accent mt-4">
                <Terminal className="w-6 h-6" />
                Terminal Mode
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
