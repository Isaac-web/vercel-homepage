import Pyramid from './triangle';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center gap-y-10 border-t border-t-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
        <div
          className="absolute top-0 inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#4f4f4f,transparent)]"
          style={{ transform: 'rotate(-45deg)' }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_200px,#3e3e3e,transparent)]"
          style={{ transform: 'rotate(45deg)' }}
        />
      </div>

      {/* Existing content */}
      <h1 className="font-bold text-5xl text-white relative z-10">
        Your complete platform for the web
      </h1>
      <p className="text-2xl text-white/50 text-center max-w-2xl relative z-10">
        Vercel provides the developer tools and cloud infrastructure to build,
        scale, and secure a faster, more personalized web.
      </p>

      <div className="flex flex-col items-center gap-y-10 relative z-10">
        <div className="flex gap-x-2">
          <button className="border border-white/50 font-semibold text-black px-5 py-3 rounded-full bg-white/90 w-[200px] text-lg">
            Start Deploying
          </button>
          <button className="border border-white/20 font-semibold text-white px-5 py-4 rounded-full bg-black/90 w-[200px] text-lg">
            Get A Demo
          </button>
        </div>
        <div className="w-60 h-60 bg-gray-600">
          <Pyramid />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
