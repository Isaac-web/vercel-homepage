import CircularProgress from './circular-progress';

type Props = {
  title: string;
  value: number;
  progressValue?: number;
  showProgress?: boolean;
};

export const ConformanceCard = ({
  title,
  value,
  progressValue = 0,
  showProgress = false,
}: Props) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white/5 p-3 py-4 rounded-lg h-[3.8rem">
      <div>
        <p className="text-white/50 text-sm">{title}</p>
      </div>
      <div className="flex gap-x-2 items-center px-2">
        {showProgress && (
          <CircularProgress
            percentage={90}
            size={30}
            showValueInChart={false}
          />
        )}
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};
