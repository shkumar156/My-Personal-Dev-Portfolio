import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
    glass: 'glass-effect',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700',
    elevated: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-soft-lg'
  };

  const baseClasses = `rounded-2xl transition-all duration-300 ${variants[variant]}`;
  
  const hoverProps = hover ? {
    whileHover: { 
      y: -8, 
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    },
    transition: { duration: 0.3, ease: 'easeOut' }
  } : {};

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...hoverProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};