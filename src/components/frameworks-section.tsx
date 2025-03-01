import { useEffect, useState } from 'react';
import { framworks } from '../contants/data';
import { Framework } from '..';
import { motion } from 'framer-motion';
import { FrameworkTile } from './framework-tile';

const FrameworksSection = () => {
  const [animate, setAnimate] = useState(false);
  const [currentFramework, setCurrentFramework] = useState<Framework | null>(
    null
  );

  useEffect(() => {
    setAnimate(true);
  }, [animate]);

  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-6 bg-white/10 gap-[1px] text-white py-[1px]">
        <div className="col-span-2 h-[11em] bg-black p-10">
          <h4 className="text-3xl font-semibold">
            Your{' '}
            {currentFramework ? (
              <motion.span
                key={currentFramework.name}
                initial={{ opacity: 0, y: -20, skew: -10 }}
                animate={{ opacity: 1, y: 0, skew: 0 }}
                exit={{ opacity: 0, y: 20, skew: 10 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                className="inline-block font-semibold"
                style={{ color: currentFramework?.color }}
              >
                {currentFramework.name},
              </motion.span>
            ) : (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                className="inline-block"
              >
                framework,
              </motion.span>
            )}
            <br />
            your way
          </h4>
        </div>
        {framworks.map((f) => (
          <FrameworkTile
            framework={f}
            onCapture={(value) => {
              setAnimate(false);
              setCurrentFramework(value);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FrameworksSection;
