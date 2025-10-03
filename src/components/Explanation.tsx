import React from 'react';

interface ExplanationProps {
    children: React.ReactNode;
}

const Explanation: React.FC<ExplanationProps> = ({ children }) => {
    return (
        <div className="explanation">
            {children}
        </div>
    );
};

export default Explanation;