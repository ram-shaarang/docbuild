import React from 'react';

interface CriticalNoteProps {
    children: React.ReactNode;
}

const CriticalNote: React.FC<CriticalNoteProps> = ({ children }) => {
    return (
        <div className="critical-note">
            {children}
        </div>
    );
};

export default CriticalNote;