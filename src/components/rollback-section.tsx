import { TbReload } from 'react-icons/tb';
import SectionHeader from './section-header';
import RollbackCard from './rollback-card';
import { BiBookBookmark } from 'react-icons/bi';
import ConformanceCodeownersContainer from './conformance-codeowners-container';

const RollbackSection = () => {
  return (
    <div className="flex flex-col lg:flex-row border-t-2 border-gray-300/10">
      <div className="flex-1 lg:border-r-2 border-gray-300/10 p-6 sm:p-14">
        <SectionHeader
          title="Instant Rollbacks"
          icon={<TbReload size={20} className="scale-x-[-1]" />}
        />

        <div className="mb-8 sm:mb-12">
          <p className="text-xl sm:text-2xl font-bold text-white">
            Go ahead and deploy on Friday.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-white/50">
            Instantly rollback to a working deployment.
          </p>
        </div>

        <div className="flex justify-start">
          <RollbackCard
            progressValue={90}
            branchName="jvjb4ynna"
            commitId="bf5f55f"
            projectName="vercel-site"
            timeEllapsed="1d"
            message="Update bento box design"
          />
        </div>
        <div
          className="flex justify-start h-36"
          style={{
            backgroundImage: `url('${'/images/rollback-arrow.png'}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <div className="flex justify-end">
          <RollbackCard
            strokeColor="#ef4444"
            progressValue={55}
            branchName="gigj155f"
            commitId="bx012mm"
            projectName="vercel-site"
            timeEllapsed="10m"
            message="Fix ESLint error on query"
          />
        </div>
      </div>

      <div className="flex-1 text-white p-6 sm:p-14">
        <SectionHeader
          title="Conformance"
          icon={<BiBookBookmark size={20} />}
        />

        <div className="mb-6 sm:mb-10">
          <p className="text-xl sm:text-2xl font-bold text-white">
            Move fast, don't break things.{' '}
            <span className="text-xl sm:text-2xl font-bold text-white/50">
              Keep quality high while maintaining velocity with Enterprise
              Monorepos.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-y-6">
          <ConformanceCodeownersContainer />
        </div>
      </div>
    </div>
  );
};

export default RollbackSection;
