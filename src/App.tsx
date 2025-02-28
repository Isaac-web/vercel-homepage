import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { FaTerminal } from 'react-icons/fa';
import CommentCard from './components/CommentCard';
import { CommentCardPointer } from './components/CommentCardPointer';

function App() {
  return (
    <div className="bg-black pt-32">
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
            <div className="flex flex-row items-center gap-x-2 text-white/70 mb-5">
              <FaTerminal size={20} />
              <p className="text-lg">Git-connected Deploys</p>
            </div>

            <div className="mb-10">
              <p className="text-2xl font-bold text-white">
                From localhost to https, in seconds.
              </p>
              <p className="text-2xl font-bold text-white/50">
                Deploy from Git or your CLI.
              </p>
            </div>

            <div className="h-60 w-full bg-white/5"></div>
          </div>

          <div className="flex-1  text-white p-14">
            <div className="flex flex-row items-center gap-x-2 text-white/70 mb-5">
              <FaTerminal size={20} />
              <p className="text-lg">Collaborative pre-production</p>
            </div>

            <div className="mb-10">
              <p className="text-2xl font-bold text-white">
                Every deploy is remarkable.{' '}
                <span className="text-2xl font-bold text-white/50">
                  Chat with your team on real, production-grade UI, not just
                  designs.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-y-10">
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
      </div>
    </div>
  );
}

export default App;
