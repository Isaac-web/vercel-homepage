import { useRef, useState } from 'react';
import { Framework } from '../types';

type Props = {
  framework: Framework;
  onCapture?(framework: Framework | null): void;
};

export const FrameworkTile = ({ framework, onCapture }: Props) => {
  const [captured, setCaptured] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const raiseFrameworkCaptured = () => {
    onCapture?.(framework);
    setCaptured(true);
  };

  const raiseFrameworkBlured = () => {
    setCaptured(false);
    onCapture?.(null);
  };

  return (
    <div
      onMouseEnter={raiseFrameworkCaptured}
      onMouseLeave={raiseFrameworkBlured}
      className={`col-span-3 lg:col-span-1 h-[7.32em] bg-black flex justify-center items-center text-2xl font-semibold transition-all ${
        captured ? 'grayscale-0' : 'grayscale'
      }`}
      ref={ref}
    >
      <img className="w-12 h-12" src={framework.logo} />
    </div>
  );
};
