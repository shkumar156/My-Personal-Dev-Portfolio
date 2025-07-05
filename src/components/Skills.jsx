import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Palette, Zap, Layers, Server, Route, Database, 
  GitBranch, Code2, Send, Brain, Cpu 
} from 'lucide-react';
import { Card } from './ui/Card';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  code: Code,
  palette: Palette,
  zap: Zap,
  components: Layers,
  server: Server,
  route: Route,
  database: Database,
  'git-branch': GitBranch,
  code2: Code2,
  send: Send,
  brain: Brain,
  cpu: Cpu,
  layers: Layers
};

const categoryColors = {
  'Frontend': 'from-blue-500 to-cyan-500',
  'Backend': 'from-green-500 to-emerald-500',
  'DevTools': 'from-purple-500 to-pink-500',
  'AI/ML': 'from-orange-500 to-red-500'
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-neutral-50 dark:bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-600 dark:text-accent-400 text-sm font-medium mb-6"
          >
            Technical Expertise
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            Each skill represents countless hours of learning, practice, and real-world application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="p-6 h-full group">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${categoryColors[category.title] || 'from-primary-500 to-secondary-500'} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  
                  <div className={`w-16 h-1 bg-gradient-to-r ${categoryColors[category.title] || 'from-primary-500 to-secondary-500'} rounded-full mx-auto`}></div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ duration: 0.2 }}
                            className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${categoryColors[category.title] || 'from-primary-500 to-secondary-500'} rounded-xl opacity-80 group-hover/skill:opacity-100 transition-opacity`}
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                {skill.name}
                              </span>
                              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                              viewport={{ once: true }}
                              className={`h-2 bg-gradient-to-r ${categoryColors[category.title] || 'from-primary-500 to-secondary-500'} rounded-full relative overflow-hidden`}
                            >
                              {/* Shimmer Effect */}
                              <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: 'linear',
                                  delay: 1
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full"
                              />
                            </motion.div>
                          </div>
                          
                          {/* Glow Effect */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category.title] || 'from-primary-500 to-secondary-500'} rounded-full blur-sm opacity-30`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};