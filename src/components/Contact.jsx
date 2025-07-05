import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { personalInfo } from '../data/portfolio';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      color: 'hover:text-neutral-800 dark:hover:text-neutral-200'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-neutral-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-accent-400/10 to-primary-400/10 rounded-full blur-3xl"></div>
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
            <Mail size={16} />
            Get In Touch
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology. Let's create something amazing together!
          </p>
        </motion.div>

        <Card variant="elevated" className="w-full max-w-4xl mx-auto glass-effect border border-primary-500/30 shadow-2xl p-10 flex flex-col justify-center items-center mt-10">
          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
            Let's Connect
          </h3>
          <div className="space-y-8 mb-4 w-full">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="pl-4">
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {item.label}
                    </p>
                    {item.href !== '#' ? (
                      <motion.a
                        href={item.href}
                        className="text-lg font-semibold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};