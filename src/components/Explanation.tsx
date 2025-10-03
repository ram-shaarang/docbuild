import React from 'react';

interface ExplanationProps {
  children: React.ReactNode;
}

const Explanation: React.FC<ExplanationProps> = ({ children }) => {
  return (
    <div style={{
      padding: '12px',
      backgroundColor: '#e9ffe9',
      margin: '12px 0',
      borderLeft: '4px solid #4CAF50',
      color: 'black'
    }}>
      {children}
    </div>
  );
};

export default Explanation;