import CircularProgress from './circular-progress';

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

const ConformanceCodeownersContainer = () => {
  return (
    <div className="bg-gradient-to-b from-white/10 to-transparent rounded-2xl flex flex-row p-px space-x-[1px]">
      <div className="flex-1 flex flex-col gap-y-2 bg-black rounded-l-2xl p-4">
        <div className="py-2">
          <p className="font-bold text-white/90">Conformance</p>
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
      <div className="flex-1 flex flex-col gap-y-2 bg-black rounded-r-2xl p-4">
        <div className="py-2">
          <p className="font-bold text-white/90">Code Owners</p>
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
    </div>
  );
};

export default ConformanceCodeownersContainer;

type Props = {
  title: string;
  value: number;
  progressValue?: number;
  showProgress?: boolean;
};

const ConformanceCard = ({
  title,
  value,
  progressValue = 0,
  showProgress = false,
}: Props) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white/10 p-3 py-4 rounded-lg">
      <div>
        <p className="text-white/50 text-sm">{title}</p>
      </div>
      <div className="flex gap-x-2 items-center px-2">
        {showProgress && (
          <CircularProgress
            percentage={progressValue}
            size={30}
            showValueInChart={false}
          />
        )}
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};
