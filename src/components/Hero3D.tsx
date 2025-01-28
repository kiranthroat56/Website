import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full h-full"
      >
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </motion.div>
    </div>
  );
};