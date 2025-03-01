import { useState } from 'react';
import { menuData } from '../contants/navbar-data';
import NavbarListItem from './navbar-list-item';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const [activeLink, setActiveLink] = useState<number | undefined>(undefined);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showMenu = isMenuHovered || isNavHovered;

  return (
    <header className="w-full flex justify-center items-center bg-black fixed top-0 z-50">
      <nav className="h-[75px] flex flex-row justify-between items-center container max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-white justify-center gap-4">
          <div>
            <img
              src={'/images/logo.svg'}
              alt="Vercel"
              className="h-[24px] w-[80px] sm:h-[40px] sm:w-[100px]"
            />
          </div>
          <div
            className="hidden lg:flex items-center h-[75px]"
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => setIsNavHovered(false)}
          >
            <a className="flex flex-row gap-4">
              {menuData.map((m, index) => (
                <button
                  key={index}
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

        <div className="hidden lg:flex gap-x-3">
          <button className="text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
            Login
          </button>
          <button className="text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
            Contact
          </button>
          <button className="text-sm border border-white/50 font-semibold text-black px-5 py-1.5 rounded-lg bg-white/90">
            Sign Up
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="absolute top-[70px] text-white p-3 rounded-lg border border-gray-300/20 bg-black shadow-md pb-8 hidden lg:block"
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
                {menuData[menuIndex].menu?.map((n, idx) =>
                  n.sections.map((s, sIdx) => (
                    <div
                      key={`${idx}-${sIdx}`}
                      className="flex flex-col justify-start items-start gap-y-2"
                    >
                      <p className="mb-2 text-sm text-white/50">{s.title}</p>
                      {s.menuItems.map((item, itemIdx) => (
                        <NavbarListItem key={itemIdx} {...item} />
                      ))}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-[75px] left-0 right-0 bg-black border-t border-gray-300/20 lg:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 flex flex-col gap-y-4">
                {menuData.map((m, index) => (
                  <button
                    key={index}
                    className="text-white/50 text-sm py-2 text-left hover:text-white"
                  >
                    {m.label}
                  </button>
                ))}
                <div className="flex flex-col gap-y-2 pt-4 border-t border-gray-300/20">
                  <button className="text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
                    Login
                  </button>
                  <button className="text-sm border border-white/20 font-semibold text-white px-5 py-1.5 rounded-lg bg-white/5">
                    Contact
                  </button>
                  <button className="text-sm border border-white/50 font-semibold text-black px-5 py-1.5 rounded-lg bg-white/90">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
