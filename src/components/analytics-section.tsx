import SectionHeader from './section-header';
import { AiOutlineLineChart } from 'react-icons/ai';
import AnalyticsChart from './AnalyticsChart';

const AnaylticsSection = () => {
  return (
    <div className="border-t-2 border-gray-300/10 relative h-[20em] sm:h-[30em] mb-6 sm:mb-10">
      <div className="p-6 sm:p-10">
        <SectionHeader
          title="Frontend Observability"
          icon={<AiOutlineLineChart size={24} />}
        />
        <div className="mb-6 sm:mb-10 w-full relative">
          <p className="text-xl sm:text-2xl font-bold text-white z-20 absolute bg-black">
            Privacy-friendly, lightweight Analytics. <br />
            <span className="text-xl sm:text-2xl font-bold text-white/50">
              Upgrade your post launch workflow with actionable, realtime
              insights.
            </span>
          </p>

          <div className="text-white absolute w-full -top-5 -left-[1em]">
            <AnalyticsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaylticsSection;
