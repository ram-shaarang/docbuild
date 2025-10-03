import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBoxProps {
  code: string;
  file?: string;
  startLine?: number;
  endLine?: number;
  language?: string;
}

const CodeBox: React.FC<CodeBoxProps> = ({ 
  code, 
  file, 
  startLine, 
  endLine, 
  language = 'python'
}) => {
  return (
    <div className="code-box">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        showLineNumbers={true}
        startingLineNumber={startLine}
        customStyle={{
          margin: 0,
          border: 'solid gray',
          borderWidth: '0.1em 0.1em 0.1em 0.8em',
          borderRadius: '4px'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;