import React from 'react';
import Markdown from 'markdown-to-jsx';
import Code from '../code/Code';
import './Output.css';

const Output = (props) => {
  return (
    <div className='output-container'>
      <Markdown 
        className='output' 
        options={{
          overrides: {
            code: {
              component: Code,
            },
          },
        }}
      >
        {props.content}
      </Markdown>
    </div>
  );
};

export default Output;
