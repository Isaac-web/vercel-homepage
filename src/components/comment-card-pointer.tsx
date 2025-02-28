import { BiSolidPointer } from 'react-icons/bi';

type Props = {
  label: string;
  direction?: 'left' | 'right';
  color?: string;
  textColor?: string;
  hideLabel?: boolean;
};

export const CommentCardPointer = ({
  direction = 'left',
  label,
  hideLabel = false,
  color = '#2563eb',
  textColor = '#000000',
}: Props) => {
  return (
    <div className="relative">
      <BiSolidPointer
        color={color}
        className={`text-xl ${
          direction === 'right' ? 'rotate-[65deg]' : 'rotate-[-7deg]'
        } absolute -top-5 ${direction === 'right' ? '-right-5' : '-left-5'}`}
      />
      {!hideLabel && (
        <div
          className={`inline-block px-2 py-1 rounded-lg font-medium`}
          style={{ backgroundColor: color }}
        >
          <p className="text-sm" style={{ color: textColor }}>
            {label}
          </p>
        </div>
      )}
    </div>
  );
};
