import { ReactNode } from 'react';

type Props = {
  title: string;
  icon?: ReactNode;
};

const SectionHeader = ({ title, icon }: Props) => {
  return (
    <div className="flex flex-row items-center gap-x-2 text-white/70 mb-5">
      {icon && <div className="mt-1">{icon}</div>}
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default SectionHeader;
