import React from 'react';

interface CriticalNoteProps {
  children: React.ReactNode;
}

const CriticalNote: React.FC<CriticalNoteProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#f09797',
      padding: '12px',
      margin: '12px 0',
      color: 'black'
    }}>
      {children}
    </div>
  );
};

export default CriticalNote;