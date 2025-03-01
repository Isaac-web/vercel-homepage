import { useEffect, useRef } from 'react';
import { Framework } from '../types';

type Props = {
  framework: Framework;
  onCapture?(framework: Framework | null): void;
};

export const FrameworkTile = ({ framework, onCapture }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const raiseFrameworkCaptured = () => {
    onCapture?.(framework);
  };

  const raiseFrameworkBlured = () => {
    onCapture?.(null);
  };

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', raiseFrameworkCaptured);
    ref.current?.addEventListener('mouseleave', raiseFrameworkBlured);

    return () => {
      ref.current?.removeEventListener('mouseenter', raiseFrameworkCaptured);
      ref.current?.removeEventListener('mouseleave', raiseFrameworkBlured);
    };
  });

  return (
    <div
      className="col-span-3 lg:col-span-1 h-[7.32em] bg-black flex justify-center items-center text-2xl font-semibold"
      ref={ref}
    >
      {framework.name}
    </div>
  );
};
