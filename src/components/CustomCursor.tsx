import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: position.x - (isPointer ? 32 : 8),
        y: position.y - (isPointer ? 32 : 8),
        scale: isPointer ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <div
        className={`w-4 h-4 rounded-full ring-2 ${isDarkMode
            ? 'bg-white ring-white'
            : 'bg-black ring-black'
          }`}
        style={{
          mixBlendMode: isDarkMode ? 'difference' : 'normal',
        }}
      />
    </motion.div>
  );
};