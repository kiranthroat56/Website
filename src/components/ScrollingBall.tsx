import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollingBall = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg z-40 ${
        isDarkMode ? 'bg-white' : 'bg-black'
      }`}
      style={{
        scale: scaleX,
        opacity: scrollYProgress
      }}
    />
  );
};