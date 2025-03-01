const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute h-screen flex flex-col justify-center items-center gap-y-6 sm:gap-y-10 border-t border-t-white/10 bg-transparent z-10 pt-20 sm:pt-52 px-4 sm:px-6">
        <h1 className="font-bold text-5xl sm:text-4xl lg:text-5xl text-white text-center">
          Your complete platform for the web
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/50 text-center max-w-2xl px-4">
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </p>

        <div className="flex flex-col items-center gap-y-6 sm:gap-y-10">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-2">
            <button className="border border-white/50 font-semibold text-black px-5 py-3 rounded-full bg-white/90 w-[200px] text-base sm:text-lg hover:opacity-75 transition-all">
              Start Deploying
            </button>
            <button className="border border-white/20 font-semibold text-white px-5 py-3 sm:py-4 rounded-full bg-black/90 w-[200px] text-base sm:text-lg hover:opacity-75 transition-all">
              Get A Demo
            </button>
          </div>
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[url('/images/pyramid.png')] bg-contain bg-no-repeat mt-4 sm:mt-10" />
        </div>
      </div>

      <div className="w-full h-[70%] bottom-0 absolute overflow-hidden">
        <div className="w-full h-[120%] relative flex justify-center">
          <div
            className="absolute -bottom-[35rem] sm:-bottom-[55rem] w-[40rem] sm:w-[80rem] h-[40rem] sm:h-[80rem] bg-[conic-gradient(from_180deg,red,teal,orange,navy,red)] blur-[50px] sm:blur-[100px] animate-spin-slow"
            style={{ borderRadius: '60%' }}
          ></div>
          <div
            className="absolute -bottom-[35rem] sm:-bottom-[55rem] w-[40rem] sm:w-[80rem] h-[40rem] sm:h-[80rem] bg-[conic-gradient(from_180deg,red,blue,orange,navy,red)] blur-[50px] sm:blur-[100px] animate-spin-slow-reverse"
            style={{ borderRadius: '60%' }}
          ></div>

          <div className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
