import { deployYourAppSectionData, framworks } from '../contants/data';
import { FrameworkCard } from './framework-card';

export const DeployYourFirstAppSection = () => {
  return (
    <section className="text-white py-10">
      <div className="w-full grid grid-cols-3 gap-x-2 lg:gap-x-4">
        <div className="col-span-3 lg:col-span-1 px-4 lg:px-10">
          <h3 className="mb-5 text-4xl font-semibold">
            Deploy your first app in seconds.
          </h3>

          <div className="flex flex-col gap-y-5">
            {deployYourAppSectionData.map((d) => (
              <div>
                <p className="text-white/50">
                  <div className="inline-flex flex-row-reverse">
                    {d.imagesUris.map((_sicon, index) => (
                      <div
                        className={`h-3.5 w-3.5 rounded-full ${
                          index === 0 ? 'mr-0' : '-mr-1.5'
                        } bg-slate-900 border border-gray-300`}
                      />
                    ))}
                  </div>
                  <span className="px-2">{d.message}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 px-4 mt-10 lg:mt-0">
          <div className="grid grid-cols-2 gap-4 lg:gap-x-7">
            {framworks.slice(0, 8).map((f) => (
              <FrameworkCard framework={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
