import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Certifications } from './components/Certifications';

// Lazy load components for better performance
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

// Enhanced Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 border-2 border-secondary-200 border-b-secondary-500 rounded-full"
      />
    </motion.div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
            <Services />
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
            <Certifications />
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;