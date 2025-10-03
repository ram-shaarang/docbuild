import React from 'react';
import { DocumentationSection as StyledSection, SectionTitle } from '../styles/StyledComponents';

interface DocumentationSectionProps {
  title: string;
  children: React.ReactNode;
}

const DocumentationSection: React.FC<DocumentationSectionProps> = ({ 
  title, 
  children 
}) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      <div className="section-content">
        {children}
      </div>
    </StyledSection>
  );
};

export default DocumentationSection;