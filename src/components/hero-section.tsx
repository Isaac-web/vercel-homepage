import Triangle from './triangle';

const HeroSection = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-y-10 border-t border-t-white/10">
      <h1 className="font-bold text-5xl text-white">
        Your complete platform for the web
      </h1>
      <p className="text-2xl text-white/50 text-center max-w-2xl">
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div className="flex flex-col items-center gap-y-10">
        <div className="flex gap-x-2">
          <button className="border border-white/50 font-semibold text-black px-5 py-3 rounded-full bg-white/90 w-[200px] text-lg">
            Start Deploying
          </button>
          <button className="border border-white/20 font-semibold text-white px-5 py-4 rounded-full bg-black/90 w-[200px] text-lg">
            Get A Demo
          </button>
        </div>
        <div className="w-60 h-60 bg-gray-600">
          <Triangle />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
