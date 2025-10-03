import React from 'react';
import styled from 'styled-components';

const Snippet = styled.code`
  background-color: ${props => props.theme.colors.snippet.background};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.small};
  font-family: monospace;
  color: ${props => props.theme.colors.text};
`;

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  return <Snippet>{code}</Snippet>;
};

export default CodeSnippet;