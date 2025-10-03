import React from 'react';
import { CriticalNote } from '../styles/StyledComponents';

interface CriticalNoteProps {
  children: React.ReactNode;
}

const CriticalNoteComponent: React.FC<CriticalNoteProps> = ({ children }) => {
  return <CriticalNote>{children}</CriticalNote>;
};

export default CriticalNoteComponent;