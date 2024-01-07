import React from 'react';
import Code from '../code/Code.js';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
import './Output.css';

const Output = (props) => {
  return (
    <div className='output-container'>
      <Markdown
        className='output'
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        children={props.content}
        components={{
          pre(props) {
            const { children } = props;
            let codeContent;
            let lang;
            const hasSpecificLang = React.Children.toArray(children).some(
              (child) => {
                if (
                  React.isValidElement(child) &&
                  child.type === 'code'
                ) {
                  codeContent = child.props.children;
                  lang = /language-(\w+)/.exec(child.props.className || '');
                  if (child.props.className) {
                    return child.props.className !== "";
                  }
                }
                return false;
              }
            );
            return hasSpecificLang ? (
              <Code known={1} children={codeContent} lang={lang[1]} />
            ) : (
              <Code known={0} children={codeContent} />
            );
          },
        }}
      />
    </div>
  );
};

export default Output;
