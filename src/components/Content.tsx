import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div style={{ 
      margin: '12px 0',
      padding: '6px',
      color: 'black'
    }}>
      {children}
    </div>
  );
};

export default Content;