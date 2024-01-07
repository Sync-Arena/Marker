import React, { useEffect, useState } from 'react';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon, Copied } from '../icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Code.css';

const Code = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  return (
    <div className='code'>
      <CopyToClipboard text={props.children} onCopy={() => setIsCopied(true)}>
        <button className='icon'>
          {isCopied ? <Copied /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      {props.known === 1 
        ? 
        <SyntaxHighlighter
          children={String(props.children).replace(/\n$/, '')}
          language={props.lang}
          style={dark}
        />
        : 
        <pre>
          <code>
            {props.children}
          </code>
        </pre>
      }
    </div>
  );
};

export default Code;
