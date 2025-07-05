import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Enhanced Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer mb-2"
            onClick={scrollToTop}
          >
            <h3 className="text-3xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-neutral-400 text-lg mb-4">{personalInfo.title}</p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-glow-lg transition-all duration-300 mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ArrowUp size={18} />
            Back to Top
          </motion.button>

          {/* Enhanced Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-neutral-800 pt-8 w-full"
          >
            <p className="text-neutral-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm mt-2">
             
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};