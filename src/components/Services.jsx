import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Layers, Rocket, Shield, TrendingUp, Smartphone } from 'lucide-react';
import { Card } from './ui/Card';

const services = [
  {
    icon: Code,
    title: 'Web Apps',
    description: 'Modern, scalable web applications tailored to your business needs.'
  },
  {
    icon: Smartphone,
    title: 'Frontend Applications',
    description: 'Beautiful, responsive UIs for all devices using React and modern frameworks.'
  },
  {
    icon: Layers,
    title: 'Customizable Websites',
    description: 'Unique, branded websites with easy customization.'
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Rapid project turnaround without sacrificing quality or performance.'
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Security best practices for peace of mind and data protection.'
  },
  
  {
    icon: Zap,
    title: 'API Integrations',
    description: 'Seamless integration with third-party APIs and services.'
  },
  
];

export const Services = () => (
  <section id="services" className="section-padding bg-white dark:bg-neutral-900 relative overflow-hidden">
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
          <Globe size={16} />
          Services
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">What I Offer</span>
        </h2>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          From idea to launch, I provide a full suite of services to help your business thrive online.
        </p>
      </motion.div>
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="glass" className="p-8 h-full flex flex-col group hover:shadow-glow">
              <div className="flex items-center justify-center mb-6">
                <service.icon className="w-10 h-10 text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm break-words overflow-visible">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
); 