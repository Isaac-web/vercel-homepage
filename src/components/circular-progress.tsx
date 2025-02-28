type Props = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  showValueInChart?: boolean;
};

const CircularProgress = ({
  size = 45,
  percentage = 90,
  strokeWidth = 4,
  color = '#00A99D',
  showValueInChart = true,
}: Props) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeOpacity={0.2}
          />

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {showValueInChart && (
            <span className="text-white text-lg font-bold">{percentage}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
