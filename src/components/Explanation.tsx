import React from 'react';
import { Explanation } from '../styles/StyledComponents';

interface ExplanationProps {
  children: React.ReactNode;
}

const ExplanationComponent: React.FC<ExplanationProps> = ({ children }) => {
  return <Explanation>{children}</Explanation>;
};

export default ExplanationComponent;