import { CodeSnippet } from './code-snippet';
import Typewriter from './typewriter';

export const DeployOnceDeliverEverywhereSection = () => {
  const codeString = `const default async function Page = () => {
    const data = sql 'SELECT * from USERS';
    return (
      <>
        <h1>code-snippet</h1>
        <ul>
          {data.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
  `;

  return (
    <section className="border-t-2 border-gray-300/10 py-32">
      <div className="mb-10 flex flex-col gap-y-5">
        <p className="text-2xl font-medium text-white text-center">
          Deploy once, deliver everywhere.
          <span className="text-2xl text-white/50">
            When you push your code to vercel, we <br /> make it instantly
            available accross the internet.
          </span>
        </p>

        <div className="flex flex-col lg:flex-row gap-y-2 justify-center gap-x-2">
          <button className="border border-white/50 font-semibold text-black px-5 py-3 rounded-full bg-white/90  text-lg">
            Learn about infrastructure
          </button>
          <button className="border border-white/20 font-semibold text-white px-5 py-4 rounded-full bg-black/90  text-lg">
            Learn about Entreprise
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-gray-800/20 -pl-20 overflow-hidden flex flex-col justify-center items-center">
        <img
          src={'/images/world-map.svg'}
          className="text-white w-full h-full opacity-20"
        />

        <Typewriter />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-2 py-4 px-2 lg:p-12 flex flex-col gap-y-8">
          <div className="shadow-xl">
            <CodeSnippet
              filename="app/users/page.tsx"
              codeString={codeString}
            />
          </div>
          <div>
            <h4 className="text-xl text-white font-semibold">
              Bringing the best of Client and Server Rendering.
            </h4>
            <p className="text-xl text-white/40">
              Experience seemless integration, optimized performance, and
              reduced bundle size live never before.
            </p>

            <button className="px-5 py-2.5 rounded-full border border-gray-500/50 text-white/80 text-lg font-semibold mt-5">
              More about Rendering
            </button>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-1">
          <div className="w-full h-[30em]">
            <img
              src={'/images/world-map.svg'}
              className="text-white w-full h-full"
            />
          </div>

          <div className="py-7 px-4">
            <p className="text-xl text-white/40">
              <span className="text-white/90">All the data. </span>
              <span>Connect with content, commerce or database platform.</span>
            </p>

            <button className="px-5 py-2.5 rounded-full border border-gray-500/50 text-white/80 text-lg font-semibold mt-[2em]">
              Discover Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployOnceDeliverEverywhereSection;
