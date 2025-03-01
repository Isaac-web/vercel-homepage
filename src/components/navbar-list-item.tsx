import { ReactNode, useState } from 'react';

type Props = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

export const NavbarListItem = ({ title, subtitle, icon }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-x-3 cursor-pointer p-2 w-full rounded-lg ${
        isHovered ? 'bg-white/10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex justify-center items-center w-[35px] h-[35px] rounded-lg border border-gray-300/20 transition-colors duration-200 text-white/50 ${
          isHovered ? 'bg-white/90 text-black/70' : ''
        }`}
        style={{ color: isHovered ? 'black' : 'white' }}
      >
        {icon}
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="text-white text-sm">{title}</p>
        <p className="text-white/50 text-xs -mt-1 line-clamp-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default NavbarListItem;
