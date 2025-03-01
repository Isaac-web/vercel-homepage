import { useState } from 'react';
import { menuData } from '../contants/navbar-data';
import NavbarListItem from './navbar-list-item';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const showMenu = isMenuHovered || isNavHovered;

  return (
    <header className="w-full flex justify-center items-center bg-black fixed top-0 z-50">
      <nav className="h-[75px] flex flex-row justify-between items-center container max-w-7xl">
        <div className="flex items-center text-white justify-center gap-4">
          <div>
            <img
              src={'/images/logo.svg'}
              alt="Vercel"
              className="h-[40px] w-[100px]"
            />
          </div>
          <div
            className="flex items-center h-[75px]"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => {
              setIsNavHovered(false);
            }}
          >
            <a className="flex flex-row gap-4">
              {menuData.map((m, index) => (
                <button
                  className={`text-white/50 text-sm px-3 py-1.5 rounded-full ${
                    activeLink === index ? 'bg-gray-300/20 text-white/90' : ''
                  }`}
                  onMouseEnter={() => {
                    setMenuIndex(index);
                    setActiveLink(index);
                    setIsNavHovered(true);
                  }}
                  onMouseLeave={() => {
                    !menuData[menuIndex]?.menu && setActiveLink(undefined);
                  }}
                >
                  {m.label}
                </button>
              ))}
            </a>
          </div>
        </div>

        <div className="flex gap-x-3">
          <button className=" text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
            Login
          </button>
          <button className=" text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
            Contact
          </button>
          <button className="text-sm border border-white/50 font-semibold text-black px-5 py-1.5 rounded-lg bg-white/90">
            Sign Up
          </button>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="absolute top-[70px] text-white p-3 rounded-lg border border-gray-300/20 bg-black shadow-md pb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => {
                setIsMenuHovered(false);
                setActiveLink(undefined);
              }}
            >
              <div className="flex flex-row gap-x-7">
                {menuData[menuIndex].menu?.map((n) =>
                  n.sections.map((s) => (
                    <div className="flex flex-col justify-start items-start gap-y-2">
                      <p className="mb-2 text-sm text-white/50">{s.title}</p>
                      {s.menuItems.map((item) => (
                        <NavbarListItem {...item} />
                      ))}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
