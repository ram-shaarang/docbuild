
import React from 'react';

interface DocumentationSectionProps {
  title: string;
  children: React.ReactNode;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({ 
  title, 
  children 
}) => {
  return (
    <div className="documentation-section" style={{ marginBottom: '40px' }}>
      <h2 style={{ 
        fontSize: '1.5em', 
        fontWeight: 'bold', 
        marginBottom: '16px',
        padding: '8px 12px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px'
      }}>
        {title}
      </h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default DocumentationSection;
