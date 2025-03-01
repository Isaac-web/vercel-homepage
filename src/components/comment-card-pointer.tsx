import { BiSolidPointer } from 'react-icons/bi';
import { motion } from 'framer-motion';

type Props = {
  label: string;
  direction?: 'left' | 'right';
  color?: string;
  textColor?: string;
  hideLabel?: boolean;
};

export const CommentCardPointer = ({
  direction = 'left',
  label,
  hideLabel = false,
  color = '#2563eb',
  textColor = '#000000',
}: Props) => {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      <BiSolidPointer
        color={color}
        className={`text-xl ${
          direction === 'right' ? 'rotate-[65deg]' : 'rotate-[-7deg]'
        } absolute -top-5 ${direction === 'right' ? '-right-5' : '-left-5'}`}
      />
      {!hideLabel && (
        <div
          className={`inline-block px-2 py-1 rounded-lg font-medium`}
          style={{ backgroundColor: color }}
        >
          <p className="text-sm" style={{ color: textColor }}>
            {label}
          </p>
        </div>
      )}
    </motion.div>
  );
};
