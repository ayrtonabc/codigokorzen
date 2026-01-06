import React from 'react';

const ContentRenderer = ({ content }) => {
  if (!content) return null;

  // Render HTML string (local data)
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return null;
};

export default ContentRenderer;
