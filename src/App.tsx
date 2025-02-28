import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { FaTerminal } from 'react-icons/fa';
import CommentCard from './components/CommentCard';
import { CommentCardPointer } from './components/CommentCardPointer';
import { BiBookBookmark, BiMessageRounded } from 'react-icons/bi';
import SectionHeader from './components/section-header';
import { AiOutlineLineChart } from 'react-icons/ai';
import { TbReload } from 'react-icons/tb';
import RollbackCard from './components/rollback-card';
import ConformanceCodeownersContainer from './components/conformance-codeowners-container';

function App() {
  return (
    <div className="bg-black pt-32 h-auto">
      <Navbar />
      <div className="container max-w-6xl mx-auto pb-20 border-2 border-gray-300/10">
        <div className="border-b-2 border-gray-300/10 mb-5">
          <HeroSection />
        </div>
        <div className="flex flex-col justify-center items-center py-20 border-t-2 border-gray-300/10">
          <h3 className="font-bold text-4xl text-white">
            Develop with your favorite tools
          </h3>
          <h3 className="font-bold text-4xl text-white">
            Launch globally, instantly Keep pushing
          </h3>
        </div>

        <div className="flex  flex-col lg:flex-row  border-t-2 border-gray-300/10">
          <div className="flex-1 border-r-2 border-gray-300/10 p-14">
            <SectionHeader
              title="Git-connected Deploys"
              icon={<FaTerminal size={20} />}
            />

            <div className="mb-12">
              <p className="text-2xl font-bold text-white">
                From localhost to https, in seconds.
              </p>
              <p className="text-2xl font-bold text-white/50">
                Deploy from Git or your CLI.
              </p>
            </div>

            <div className="w-full relative">
              <div
                className="w-[24em] h-[15em]  rounded-xl absolute"
                style={{
                  backgroundImage: `url('${'/images/terminal.png'}')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="w-[24em] h-[15em] rounded-xl absolute top-[9.2em] left-[6em]"
                style={{
                  backgroundImage: `url('${'/images/browser.png'}')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          <div className="flex-1  text-white p-14">
            <SectionHeader
              title="Collaborative pre-production"
              icon={<BiMessageRounded size={20} />}
            />

            <div className="mb-10">
              <p className="text-2xl font-bold text-white">
                Every deploy is remarkable.{' '}
                <span className="text-2xl font-bold text-white/50">
                  Chat with your team on real, production-grade UI, not just
                  designs.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-y-6">
              <div className="flex  justify-start">
                <CommentCard
                  message={
                    <p>
                      Swipped out the{' '}
                      <span className="bg-white/10 px-[5px] py-[2px] rounded-md">
                        button
                      </span>{' '}
                      for some variant we needed.
                    </p>
                  }
                />
              </div>

              <div className="flex items-end gap-x-8 justify-end">
                <CommentCardPointer direction="right" label="Pranati" />
                <CommentCard message={<p>How about this instead?</p>} />
              </div>

              <div className="flex items-end gap-x-14 justify-start">
                <CommentCard
                  message={
                    <p>
                      I like it. This works with the brand tweaks{' '}
                      <span className="font-medium">@mamuso</span>
                    </p>
                  }
                />
                <CommentCardPointer
                  direction="left"
                  label="Rauno"
                  color="#ef4444"
                />
              </div>

              <div className="flex items-end justify-end relative">
                <CommentCard
                  message={<p>This looks great</p>}
                  variant="input"
                />
                <div className="absolute -right-8">
                  <CommentCardPointer
                    direction="left"
                    label="Rauno"
                    hideLabel
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-300/10 relative h-[30em]">
          <div className="p-10">
            <SectionHeader
              title="Frontend Observability"
              icon={<AiOutlineLineChart size={24} />}
            />
            <div className="mb-10 max-w-[40em]">
              <p className="text-2xl font-bold text-white">
                Privacy-friendly, lightweight Analytics. <br />
                <span className="text-2xl font-bold text-white/50">
                  Upgrade your post launch workflow with actionable, realtime
                  insights.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex  flex-col lg:flex-row  border-t-2 border-gray-300/10">
          <div className="flex-1 border-r-2 border-gray-300/10 p-14">
            <SectionHeader
              title="Instant Rollbacks"
              icon={<TbReload size={20} className="scale-x-[-1]" />}
            />

            <div className="mb-12">
              <p className="text-2xl font-bold text-white">
                Go ahead and deploy on Friday.
              </p>
              <p className="text-2xl font-bold text-white/50">
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

          <div className="flex-1  text-white p-14">
            <SectionHeader
              title="Conformance"
              icon={<BiBookBookmark size={20} />}
            />

            <div className="mb-10">
              <p className="text-2xl font-bold text-white">
                Move fast, don’t break things.{' '}
                <span className="text-2xl font-bold text-white/50">
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
      </div>
    </div>
  );
}

export default App;
