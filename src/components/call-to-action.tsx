import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';

export const CallToAction = () => {
  return (
    <section className="text-white py-10">
      <div className="w-full grid grid-cols-3 gap-x-2 lg:gap-x-4">
        <div className="col-span-3 lg:col-span-2 px-7">
          <button className="flex items-center justify-between w-full px-8 py-4 pr-4 rounded-full border-2 border-gray-300/20 text-white/90">
            <span className="text-4xl font-bold tracking-wide">
              Start Deploying
            </span>
            <IoArrowForwardCircleSharp className="text-7xl" />
          </button>
        </div>

        <div className="col-span-3 lg:col-span-1 px-10">
          <div className="flex flex-col gap-y-4">
            <button className="flex items-center justify-between w-full px-4 py-3 rounded-full bg-white text-black">
              Talk to an expert
              <IoIosArrowDroprightCircle className="text-xl" />
            </button>
            <button className="flex items-center justify-between w-full px-4 py-3 rounded-full border-2 border-gray-300/50 text-white/90">
              Get an entreprise trial
              <IoIosArrowDroprightCircle className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
