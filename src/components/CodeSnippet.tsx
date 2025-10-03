import React from 'react';
import { CodeSnippet } from '../styles/StyledComponents';

interface CodeSnippetProps {
  code: string;
}

const CodeSnippetComponent: React.FC<CodeSnippetProps> = ({ code }) => {
  return <CodeSnippet>{code}</CodeSnippet>;
};

export default CodeSnippetComponent;