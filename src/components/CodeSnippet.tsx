import React from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ 
  code, 
  language = 'python' 
}) => {
  return (
    <code style={{
      backgroundColor: '#eeeeee',
      borderRadius: '6px',
      padding: '6px',
      fontFamily: 'monospace',
      color: 'black'
    }}>
      {code}
    </code>
  );
};

export default CodeSnippet;