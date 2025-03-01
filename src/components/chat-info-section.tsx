import { FaTerminal } from 'react-icons/fa';
import SectionHeader from './section-header';
import { BiMessageRounded } from 'react-icons/bi';
import CommentCard from './comment-card';
import { CommentCardPointer } from './comment-card-pointer';

const ChatInfoSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 sm:py-20 border-t-2 border-gray-300/10">
        <h3 className="font-bold text-2xl sm:text-4xl text-white text-center px-4">
          Develop with your favorite tools
        </h3>
        <h3 className="font-bold text-2xl sm:text-4xl text-white text-center px-4">
          Launch globally, instantly Keep pushing
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row border-t-2 border-gray-300/10">
        <div className="flex-1 lg:border-r-2 border-gray-300/10 p-6 sm:p-14">
          <SectionHeader
            title="Git-connected Deploys"
            icon={<FaTerminal size={20} />}
          />

          <div className="mb-8 sm:mb-12">
            <p className="text-xl sm:text-2xl font-bold text-white">
              From localhost to https, in seconds.
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white/50">
              Deploy from Git or your CLI.
            </p>
          </div>

          <div className="w-full relative hidden sm:block">
            <div
              className="w-[18em] sm:w-[24em] h-[12em] sm:h-[15em] rounded-xl absolute"
              style={{
                backgroundImage: `url('${'/images/terminal.png'}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="w-[18em] sm:w-[24em] h-[12em] sm:h-[15em] rounded-xl absolute top-[7em] sm:top-[9.2em] left-[4em] sm:left-[6em]"
              style={{
                backgroundImage: `url('${'/images/browser.png'}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>

        <div className="flex-1 text-white p-6 sm:p-14">
          <SectionHeader
            title="Collaborative pre-production"
            icon={<BiMessageRounded size={20} />}
          />

          <div className="mb-6 sm:mb-10">
            <p className="text-xl sm:text-2xl font-bold text-white">
              Every deploy is remarkable.{' '}
              <span className="text-xl sm:text-2xl font-bold text-white/50">
                Chat with your team on real, production-grade UI, not just
                designs.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-y-4 sm:gap-y-6">
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
              <CommentCard message={<p>This looks great</p>} variant="input" />
              <div className="absolute -right-8">
                <CommentCardPointer direction="left" label="Rauno" hideLabel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInfoSection;
