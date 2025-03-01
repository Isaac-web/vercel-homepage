import { ConformanceCard } from './conformance-card';

const conformanceData = [
  {
    title: 'Excelent',
    showChart: true,
    value: 9.5,
  },
  {
    title: 'Total Issues',
    showChart: false,
    value: 34,
  },
  {
    title: 'Major Issues',
    showChart: false,
    value: 34,
  },
];

const codeOwners = [
  {
    projectName: '@vercel/design',
    contributors: [{ avatarUrl: '#' }, { avatarUrl: '#' }, { avatarUrl: '#' }],
  },
  {
    projectName: '@vercel/eng',
    contributors: [
      { avatarUrl: '#' },
      { avatarUrl: '#' },
      { avatarUrl: '#' },
      { avatarUrl: '#' },
    ],
  },
  {
    projectName: '@vercel/marketing',
    contributors: [{ avatarUrl: '#' }, { avatarUrl: '#' }],
  },
];

const ConformanceCodeownersContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white/15 to-transparent rounded-2xl flex flex-col gap-y-2 lg:gap-y-4  sm:flex-row p-px space-y-[1px] sm:space-y-0 sm:space-x-[1px]">
      <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-y-2 bg-black rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none p-3 sm:p-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="py-1 sm:py-2">
          <p className="font-medium text-white/90 text-sm sm:text-base">
            Conformance
          </p>
        </div>

        {conformanceData.map((c, index) => (
          <ConformanceCard
            key={index}
            title={c.title}
            value={c.value}
            progressValue={c.value * 10}
            showProgress={c.showChart}
          />
        ))}
      </div>
      <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-y-2 bg-black rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none p-3 sm:p-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="py-1 sm:py-2">
          <p className="font-medium text-white/90 text-sm sm:text-base">
            Code Owners
          </p>
        </div>

        {codeOwners.map((c, index) => (
          <CodeOwnersCard
            key={index}
            projectName={c.projectName}
            contributors={c.contributors}
          />
        ))}
      </div>
    </div>
  );
};

export default ConformanceCodeownersContainer;

type Props = {
  projectName: string;
  contributors: { avatarUrl: string }[];
};

const CodeOwnersCard = ({ projectName, contributors = [] }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white/5 p-2 sm:p-3 py-3 sm:py-4 rounded-md h-[3rem] sm:h-[3.8rem]">
      <div>
        <p className="text-white/50 text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">
          {projectName}
        </p>
      </div>
      <div className="flex gap-x-1 sm:gap-x-2 items-center px-1 sm:px-2">
        {contributors.map((c, index) => (
          <img
            key={index}
            src={c.avatarUrl}
            className={`w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-gray-100 border border-gray-800 ${
              index === 0 ? 'ml-0' : '-ml-3 sm:-ml-4'
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
