import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { personalInfo } from '../data/portfolio';
import { ThemeToggle } from './ui/ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-effect shadow-soft-lg border-b border-white/20 dark:border-neutral-800/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-2xl font-bold gradient-text">
              {personalInfo.name}
            </h1>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeId === item.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Enhanced Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Remove Resume button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <Mail size={16} className="group-hover:animate-pulse" />
                Contact
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass-effect text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/20 dark:border-neutral-800/20 mt-2"
            >
              <div className="px-2 pt-4 pb-6 space-y-2 glass-effect rounded-b-2xl">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      activeId === item.id
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                {/* Remove Resume button from mobile */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};