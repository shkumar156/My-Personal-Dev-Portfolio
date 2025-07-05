import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolio';

export const Hero = () => {
  const typedText = useTypingEffect(personalInfo.tagline, 50);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"></div>
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 mesh-bg opacity-30"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 blur-xl"
            animate={{ 
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="relative z-10 container-custom py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Enhanced Effects */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 opacity-30 blur-2xl animate-pulse"></div>
              
              {/* Main Image */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white dark:border-neutral-800 shadow-2xl object-cover relative z-10 floating-element"
                />
                
                {/* Rotating Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-rotate-slow opacity-60 blur-sm"></div>
              </motion.div>

              {/* Sparkle Effects */}
              <motion.div
                className="absolute -top-2 -right-2 text-primary-500"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-3xl text-neutral-600 dark:text-neutral-300 mb-6 font-medium"
          >
            {personalInfo.title}
          </motion.p>

          {/* Enhanced Typing Effect */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {typedText}
                <motion.span 
                  className="inline-block w-0.5 h-6 bg-primary-500 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </p>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="btn-outline w-full sm:w-auto group"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-row justify-center items-center gap-8 mt-2 mb-16"
          >
            {[
              { icon: Github, href: personalInfo.social.github, color: 'hover:text-neutral-800 dark:hover:text-neutral-200' },
              { icon: Linkedin, href: personalInfo.social.linkedin, color: 'hover:text-blue-600' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-black dark:text-white ${social.color} transition-all duration-300 p-3 rounded-full glass-effect`}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 ml-[0px] cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </motion.div>
          <ArrowDown size={16} className="animate-bounce-soft" />
        </motion.div>
      </motion.div>
    </section>
  );
};