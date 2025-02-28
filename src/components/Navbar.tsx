const Navbar = () => {
  return (
    <header className="w-full flex justify-center items-center bg-black fixed top-0">
      <nav className="h-[75px] flex flex-row justify-between items-center container max-w-7xl">
        <div className="text-white flex justify-center gap-4">
          <h3>Vercel</h3>
          <div>
            <a className="flex flex-row gap-4">
              <button className="text-white/50">Products</button>
              <button className="text-white/50">Solutions</button>
              <button className="text-white/50">Resources</button>
              <button className="text-white/50">Entreprise</button>
              <button className="text-white/50">Docs</button>
              <button className="text-white/50">Pricing</button>
            </a>
          </div>
        </div>

        <div className="flex gap-x-3">
          <button className="border border-white/20 font-semibold text-white px-5 py-2 rounded-lg bg-white/5">
            Login
          </button>
          <button className="border border-white/20 font-semibold text-white px-5 py-2 rounded-lg bg-white/5">
            Contact
          </button>
          <button className="border border-white/50 font-semibold text-black px-5 py-2 rounded-lg bg-white/90">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
