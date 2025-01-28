import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-white text-center">
        <motion.div
          className="w-40 h-1 bg-gray-700 rounded-full overflow-hidden mb-4"
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </motion.div>
        <span className="text-2xl font-light">{progress}%</span>
      </div>
    </motion.div>
  );
};