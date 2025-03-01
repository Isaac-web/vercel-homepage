import { useState } from 'react';
import { GrDeploy, GrLaunch } from 'react-icons/gr';

import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  const [stage, setStage] = useState<'push' | 'deploying' | 'deployed'>('push');

  const icons = {
    push: <GrDeploy className="text-blue-500" />,
    deploying: <GrLaunch className="text-yellow-600" />,
    deployed: <GrDeploy className="text-green-500" />,
  };

  return (
    <div className="border border-gray-300/20 w-[12em] p-4 rounded-xl flex flex-row justify-between items-center">
      <TypeAnimation
        sequence={[
          () => setStage('push'),
          'git push',
          1000,
          () => setStage('deployed'),
          'building...',
          2000,
          () => setStage('deploying'),
          'deployed 🍾',
          2000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1em', display: 'inline-block', color: 'white' }}
      />
      <div className="p-2 pl-6 border-l border-gray-300/20">{icons[stage]}</div>
    </div>
  );
};

export default Typewriter;
