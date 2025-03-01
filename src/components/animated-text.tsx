import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedText = ({ text, color }: { text: string; color?: string }) => {
  const [_isHovered, setIsHovered] = useState(false);
  const [animateDirection, setAnimateDirection] = useState('down');

  console.log(animateDirection);

  return (
    <motion.span
      className="inline-block font-semibold shadow-green-300 gap-1 cursor-pointer"
      style={{ color }}
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        setAnimateDirection(animateDirection === 'up' ? 'down' : 'up');
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${animateDirection} ${index}`}
          initial={{
            opacity: 0,
            y: -20,
            skew: -10,
          }}
          animate={{ opacity: 1, y: 0, skew: 0 }}
          exit={{ opacity: 0, y: 20, skew: 10 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            bounce: 0.2,
          }}
          className="inline-block text-xl lg:text-4xl font-bold"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
