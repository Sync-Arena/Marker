import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyIcon, Copied } from '../icons';
import './Code.css'

const Code = ({ children, language }) => {

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout();
  }, [isCopied]);

  return (
    <div className='code'>
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className='icon'>
          {isCopied ? <Copied /> : <CopyIcon className='copy-icon'/>}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter 
        language={language} 
        style={materialDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
