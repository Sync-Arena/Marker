import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Output.css';

const Output = (props) => {
  return (
    <div className='output-container'>
      <ReactMarkdown className='output'>
        {props.content}
      </ReactMarkdown>
    </div>
  );
};

export default Output;
