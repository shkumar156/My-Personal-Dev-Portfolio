import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Remove all supabase imports and backend logic
    // On submit, just show a static success message or do nothing
    
    setIsSubmitting(false);
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card variant="glass" className="p-8 lg:p-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Subscribe to my newsletter for the latest updates on projects, 
              tech insights, and development tips. No spam, just valuable content.
            </p>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    Thanks for subscribing! Check your email for confirmation.
                  </p>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    Something went wrong. Please try again.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="group"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={18} className="group-hover:animate-pulse" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
              Unsubscribe at any time. Your privacy is important to me.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};