import { IoMdBusiness } from 'react-icons/io';
import { MdSecurity } from 'react-icons/md';

export const ExpandYourEntrepriseSection = () => {
  return (
    <div className="h-auto w-full flex flex-wrap items-center justify-center text-lg md:text-3xl font-medium text-white gap-4 px-4 py-10 border-t-2 border-gray-300/10 text-center">
      <span>Scale Your</span>
      <span className="flex items-center justify-center gap-x-2 text-white/80 border-2 border-white/20 font-semibold px-4 md:px-5 py-2 rounded-full text-base md:text-lg">
        <IoMdBusiness /> Entreprise
      </span>
      <span className="whitespace-nowrap">without compromising your</span>
      <span className="flex items-center justify-center gap-x-2 text-white/80 border-2 border-white/20 font-semibold px-4 md:px-5 py-2 rounded-full text-base md:text-lg">
        <MdSecurity />
        Security
      </span>
    </div>
  );
};
