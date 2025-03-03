import { MdOutlineContentCopy, MdOutlineDone } from 'react-icons/md';
import { SiTypescript } from 'react-icons/si';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useClipboard from '../hooks/use-clipboard';

type Props = {
  filename: string;
  codeString: string;
};

export const CodeSnippet = ({ filename, codeString }: Props) => {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <div className="border border-gray-600/50 rounded-xl overflow-hidden">
      <div className="h-12 w-full flex flex-row items-center justify-between border-b border-gray-600/50 px-4">
        <div className="text-white/70 flex flex-row items-center gap-x-3">
          <SiTypescript />
          <p>{filename}</p>
        </div>

        <div>
          <button
            className="text-white/70 p-2 rounded-full hover:bg-gray-700/50"
            onClick={() => copyToClipboard(codeString)}
          >
            {copied ? <MdOutlineDone /> : <MdOutlineContentCopy />}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language="tsx"
        style={atomDark}
        customStyle={{ margin: 0, borderRadius: 0 }}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
