import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card } from './ui/Card';

const certifications = [
  {
    id: '1',
    title: 'The Complete Beginner Web Development Bootcamp',
    description: 'Professional Certificate from Google Developers Group on Web Development covering MERN Stack and UI/UX best practices.',
    issuer: 'Google Developers Group',
    date: '2024',
    url: 'https://drive.google.com/file/d/12-j2PEGXaW9bsMGGuU1Zuf5E_-MJA1rc/view?usp=drive_link',
    featured: false
  },
  {
    id: '2',
    title: 'Intro to Machine Learning',
    description: 'Professional Certificate from Kaggle on Machine Learning covering Python, Decision Trees, Data Preprocessing and Model Evaluation.',
    issuer: 'Kaggle',
    date: '2025',
    url: 'https://www.kaggle.com/learn/certification/muhammadumar5345/intro-to-machine-learning',
    featured: false
  },
  
];

export const Certifications = () => (
  <section id="certifications" className="section-padding bg-white dark:bg-neutral-800 relative overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-600 dark:text-accent-400 text-sm font-medium mb-6"
        >
          <Award size={16} />
          Certifications
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">My Certifications</span>
        </h2>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          Here are some of my professional certifications and achievements.
        </p>
      </motion.div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full p-6">
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-7 h-7 text-accent-500" />
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg text-xs font-medium mr-2">
                    {cert.issuer}
                  </span>
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-lg text-xs font-medium">
                    {cert.date}
                  </span>
                  <p className="text-neutral-600 dark:text-neutral-300 my-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {cert.url && (
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent-500/90 text-white rounded-xl text-sm font-semibold hover:bg-accent-600 transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View
                      </motion.a>
                    )}
                  </div>
                  {cert.featured && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-xs font-semibold">
                        <Award size={12} />
                        Featured
                      </div>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </section>
); 