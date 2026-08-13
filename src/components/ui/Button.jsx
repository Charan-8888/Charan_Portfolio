import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', href, to, className = '', onClick, type = 'button', icon: Icon, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    secondary: "bg-card text-white border border-border hover:bg-border focus:ring-white/20",
    outline: "bg-transparent text-white border border-accent hover:bg-accent/10 focus:ring-accent",
    ghost: "bg-transparent text-secondary-text hover:text-white hover:bg-white/5 focus:ring-white/20"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  };

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
};

export default Button;
