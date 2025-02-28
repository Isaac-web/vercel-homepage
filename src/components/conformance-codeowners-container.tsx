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
    contributors: [{ avatarUrl: '#' }, { avatarUrl: '#' }, { avatarUrl: '#' }],
  },
];

const ConformanceCodeownersContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white/15 to-transparent rounded-2xl flex flex-row p-px space-x-[1px]">
      <div className="flex-1 flex flex-col gap-y-2 bg-black rounded-l-2xl p-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="py-2">
          <p className="font-medium text-white/90">Conformance</p>
        </div>

        {conformanceData.map((c) => (
          <ConformanceCard
            title={c.title}
            value={c.value}
            progressValue={c.value * 10}
            showProgress={c.showChart}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-y-2 bg-black rounded-r-2xl p-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="py-2">
          <p className="font-medium text-white/90">Code Owners</p>
        </div>

        {codeOwners.map((c) => (
          <CodeOwnersCard
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
    <div className="flex flex-row justify-between items-center bg-white/5 p-3 py-4 rounded-md h-[3.8rem] ">
      <div>
        <p className="text-white/50 text-sm">{projectName}</p>
      </div>
      <div className="flex gap-x-2 items-center px-2">
        {contributors.map((c, index) => (
          <img
            src={c.avatarUrl}
            className={`w-6 h-6 rounded-full bg-gray-100 border border-gray-800 ${
              index === 0 ? 'ml-0' : '-ml-4'
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
