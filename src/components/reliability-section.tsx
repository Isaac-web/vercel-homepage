import { reliabilityData } from '../contants/data';
import SectionHeader from './section-header';

const ReliabilitySection = () => {
  return (
    <section className="text-white py-20 px-5 lg:px-20">
      <h3 className="mb-14 lg:mb-32 text-4xl font-semibold">
        Reliabilty you can count on
      </h3>

      <div className="w-full grid grid-cols-3 gap-x-2 lg:gap-x-7">
        {reliabilityData.map((r) => (
          <div className="col-span-3 lg:col-span-1 py-10 mb-7">
            <SectionHeader title={r.title} icon={r.icon} />
            <p className="text-white/90 text-lg font-semibold">{r.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReliabilitySection;
