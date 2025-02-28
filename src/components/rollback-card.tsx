import { MdCommit } from 'react-icons/md';
import CircularProgress from './circular-progress';

type Props = {
  strokeColor?: string;
  progressValue: number;
  timeEllapsed: string;
  projectName: string;
  commitId: string;
  branchName: string;
  message: string;
};

const RollbackCard = ({
  strokeColor,
  progressValue,
  timeEllapsed,
  projectName,
  branchName,
  commitId,
  message,
}: Props) => {
  return (
    <div className="flex flex-row flex-nowrap p-2 bg-white/5 border border-white/10 rounded-xl items-center max-w-[25em] gap-x-4">
      <div className="flex flex-col flex-1 p-2 gap-y-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-white/50">
            <span>{projectName}</span>/
            <span className="text-white/80 font-semibold">{branchName}</span>
          </p>
          <p className="text-white/50">
            <span className="text-sm text-white/60">{timeEllapsed} ago</span>
          </p>
        </div>

        <div className="flex flex-row justify-start items-center gap-x-2">
          <MdCommit className="text-white/90" size={24} />
          <p className="text-white/50">
            <span className="text-sm text-white/90">
              {commitId} {message}
            </span>
          </p>
        </div>
      </div>

      <div className="w-[50px] h-[50px] text-white ">
        <CircularProgress percentage={progressValue} color={strokeColor} />
      </div>
    </div>
  );
};

export default RollbackCard;
