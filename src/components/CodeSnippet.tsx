import React from 'react';

interface CodeSnippetProps {
    code: string;
    language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
    code,
    language = 'python'
}) => {
return (
        <code className="code-snippet">
            {code}
        </code>
    );
};

export default CodeSnippet;