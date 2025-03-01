import { Framework } from '../types';

type Props = {
  framework: Framework;
};

export const FrameworkCard = ({ framework }: Props) => {
  return (
    <div>
      <div className="h-[8em] bg-white/10 flex justify-center items-center rounded-t-md">
        <img className="w-10 h-10 rounded-full bg-white/10" />
      </div>
      <div className="p-4 border border-gray-50/10 rounded-b-md">
        <p className="font-pmedium">{framework.name} template</p>
      </div>
    </div>
  );
};
