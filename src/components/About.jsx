import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';
import { Card } from './ui/Card';
import { personalInfo } from '../data/portfolio';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Optimizing applications for speed and user experience',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Award,
    title: 'Quality Focus',
    description: 'Delivering high-quality solutions that exceed expectations',
    color: 'from-purple-500 to-pink-500'
  }
];

const stats = [
  { number: '1+', label: 'Year Experience', icon: Target },
  { number: '100%', label: 'Client Satisfaction', icon: Heart },
  { number: '24/7', label: 'Problem Solving', icon: Lightbulb }
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
          >
            About Me
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Passionate Developer</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies 
            and AI/ML. I love building innovative solutions that solve real-world problems 
            and create meaningful user experiences.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card variant="glass" className="p-6 group hover:shadow-glow">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  With 1+ year of experience in software development, I've worked on 
                  diverse projects ranging from e-commerce platforms to AI-powered applications.
                  My journey began with a curiosity about how things work, which evolved into 
                  a passion for creating digital solutions.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  I specialize in MERN Stack and Python, with a strong focus on creating 
                  scalable, user-friendly applications. My passion for AI and machine learning 
                  drives me to explore innovative solutions that enhance user experiences and 
                  solve complex problems.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  exploring the latest tech trends, or working 
                  on personal projects that push the boundaries of what's possible.
                </motion.p>
              </div>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {['React', 'Node.js', 'Express.js', 'MongoDB', 'Python',  'AI/ML',].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </Card>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full group">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};