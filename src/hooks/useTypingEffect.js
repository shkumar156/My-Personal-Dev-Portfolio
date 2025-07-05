import { useState, useEffect } from 'react';

export const useTypingEffect = (text, speed = 100, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimeout);
    }

    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (currentIndex === text.length && !isDeleting) {
        // Pause at the end before starting to delete
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, isDeleting, hasStarted, startDelay]);

  return displayText;
};