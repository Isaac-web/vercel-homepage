import { ReactNode } from 'react';
import { IoArrowUp } from 'react-icons/io5';

type Props = {
  message: ReactNode;
  variant?: 'card' | 'input';
};

const CommentCard = ({ message, variant = 'card' }: Props) => {
  return (
    <div className="flex  space-x-2 flex-row justify-end items-end flex-nowrap p-4 border border-white/10 rounded-xl bg-white/5 max-w-[18em]">
      <div className="flex-1">{message}</div>
      {variant === 'input' && (
        <div className="text-black w-[30px] h-[30px] bg-white rounded-full -mt-[2px] flex justify-center items-center">
          <IoArrowUp className="text-xs" />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
