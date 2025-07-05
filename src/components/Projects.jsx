import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Star, Calendar, Users } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { projects } from '../data/portfolio';

const categories = [
  { id: 'all', label: 'All Projects', icon: Filter },
  { id: 'FullStack', label: 'Full Stack', icon: Users },
  { id: 'AI', label: 'AI/ML', icon: Star },
  { id: 'MobileApp', label: 'Mobile App', icon: Calendar }
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-neutral-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-full text-secondary-600 dark:text-secondary-400 text-sm font-medium mb-6"
          >
            <Star size={16} />
            Featured Work
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects showcasing my skills in web development, 
            AI/ML, and mobile applications. Each project represents a unique challenge 
            and innovative solution.
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'text-white shadow-glow'
                  : 'glass-effect text-neutral-700 dark:text-neutral-300 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl"
                  layoutId="activeFilter"
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <span className="relative z-10 flex items-center gap-2">
                <category.icon size={16} />
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden h-full p-6">
                  {/* Enhanced Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-xl text-sm font-semibold hover:bg-white/30 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md text-white rounded-xl text-sm font-semibold hover:bg-black/60 transition-all"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-xs font-semibold">
                          <Star size={12} />
                          Featured
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced Project Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-medium hover:scale-105 transition-transform"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group"
                        >
                          <ExternalLink size={14} className="group-hover:animate-pulse" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group"
                        >
                          <Github size={14} className="group-hover:animate-pulse" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-10 h-10 text-neutral-500 dark:text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              No projects match the selected category. Try selecting a different filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};