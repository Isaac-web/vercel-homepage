import { GoDotFill } from 'react-icons/go';
import { footerData } from '../contants/data';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { RiSaveLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-8 lg:py-24 px-5 lg:px-0">
      <nav className="container max-w-6xl grid grid-cols-4 gap-y-16">
        {footerData.map((d) => (
          <div className="col-span-4 lg:col-span-1">
            <h3 className="font-medium text-white mb-7">{d.title}</h3>
            <ul className="flex flex-col gap-y-3">
              {d.links.map((l) => (
                <li className="text-white/50 hover:text-white/90 transition-all flex items-center space-x-2">
                  {l.icon && l.iconPosition === 'left' && (
                    <div className="inline-block">{l.icon}</div>
                  )}
                  <a href={l.href}>{l.label}</a>
                  {l.icon && l.iconPosition === 'right' && (
                    <div className="inline-block">{l.icon}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="container max-w-6xl mt-7 flex flex-row flex-nowrap justify-between">
        <div className="flex flex-row items-center text-blue-600">
          <GoDotFill />
          <p>All systems normal</p>
        </div>
        <div className="flex flex-row items-center border border-gray-300/20 rounded-full">
          <button className="p-2 rounded-full border border-gray-300/20">
            <RiSaveLine className="text-sm text-white/90" />
          </button>
          <button className="p-2 rounded-full  border-gray-300/20">
            <MdOutlineLightMode className="text-sm text-white/50" />
          </button>
          <button className="p-2 rounded-full  border-gray-300/20">
            <MdOutlineDarkMode className="text-sm text-white/50" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
