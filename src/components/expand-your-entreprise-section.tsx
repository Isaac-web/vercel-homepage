import { IoMdBusiness } from 'react-icons/io';
import { MdSecurity } from 'react-icons/md';

export const ExpandYourEntrepriseSection = () => {
  return (
    <div className="h-[6em] w-full flex items-center justify-center text-3xl font-medium text-white gap-4 border-t-2 border-gray-300/10">
      <span>Scale Your</span>
      <span className="flex items-center justify-center gap-x-2 text-white/80 border-2 border-white/20 font-semibold  px-5 py-2 rounded-full text-lg mt-2">
        <IoMdBusiness /> Entreprise
      </span>
      <span>without compromizing your</span>
      <span className="flex items-center justify-center gap-x-2 text-white/80 border-2 border-white/20 font-semibold  px-5 py-2 rounded-full text-lg mt-2">
        <MdSecurity />
        Security
      </span>
    </div>
  );
};
