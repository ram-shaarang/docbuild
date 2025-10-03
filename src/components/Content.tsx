import React from 'react';
import { Content } from '../styles/StyledComponents';

interface ContentProps {
  children: React.ReactNode;
}

const ContentComponent: React.FC<ContentProps> = ({ children }) => {
  return <Content>{children}</Content>;
};

export default ContentComponent;