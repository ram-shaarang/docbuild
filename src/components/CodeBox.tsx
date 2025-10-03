import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBoxProps {
  code: string;
  githubUrl?: string;
  language?: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({ 
  code, 
  githubUrl, 
  language = 'python'
}) => {

  const extractStartLine = (url: string): number | undefined => {
    const match = url.match(/#L(\d+)/);
    return match ? parseInt(match[1], 10) : undefined;
  };

  const startLine = githubUrl ? extractStartLine(githubUrl) : undefined;

  const codeContent = (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      showLineNumbers={!!startLine}
      startingLineNumber={startLine}
      customStyle={{
        margin: 0,
        border: 'solid gray',
        borderWidth: '0.1em 0.1em 0.1em 0.8em',
        borderRadius: '4px',
        cursor: githubUrl ? 'pointer' : 'default',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );

  if (githubUrl) {
    return (
      <div className="code-box">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          {codeContent}
        </a>
      </div>
    );
  }

  return <div className="code-box">{codeContent}</div>;
};

export default CodeBox;