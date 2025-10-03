import styled from 'styled-components';

export const Content = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
  padding: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.text};
`;

export const Explanation = styled.div`
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.explanation.background};
  margin: ${props => props.theme.spacing.medium} 0;
  border-left: 4px solid ${props => props.theme.colors.explanation.border};
  color: ${props => props.theme.colors.text};
`;

export const CriticalNote = styled.div`
  background-color: ${props => props.theme.colors.critical.background};
  padding: ${props => props.theme.spacing.medium};
  margin: ${props => props.theme.spacing.medium} 0;
  color: ${props => props.theme.colors.text};
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 8px 12px;
  background-color: ${props => props.theme.colors.section.background};
  border-radius: ${props => props.theme.borderRadius.small};
  color: ${props => props.theme.colors.text};
`;