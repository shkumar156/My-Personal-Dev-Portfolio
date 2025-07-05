import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  target,
  rel,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-glow-lg',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-glow-lg',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 bg-transparent',
    ghost: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-neutral-500',
    gradient: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white hover:shadow-glow-lg focus:ring-primary-500',
    glass: 'glass-effect text-neutral-900 dark:text-neutral-100 hover:bg-white/20 dark:hover:bg-neutral-900/20 focus:ring-primary-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-4'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Content */}
      <motion.span
        className="flex items-center gap-2 relative z-10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.span>
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.05, y: -2 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={classes} 
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
};