import { useState, useEffect } from 'react';

export const useScrollSpy = (elementIds: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -80% 0px`,
        threshold: 0.1
      }
    );

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [elementIds, offset]);

  return activeId;
};