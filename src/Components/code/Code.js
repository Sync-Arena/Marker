import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, solarizedDarkAtom} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Code.css';

const Code = ({known, children, lang, isDark}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [isCopied]);

  return (
    <div className='code'>
      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className='icon'>
          {isCopied ? <FaCheck /> : <FiCopy className='copy-icon'/>}
        </button>
      </CopyToClipboard>
      {known === 1 
        ? 
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          language={lang}
          style={isDark ? solarizedDarkAtom : solarizedlight}
        />
        : 
        <pre>
          <code>
            {children}
          </code>
        </pre>
      }
    </div>
  );
};

export default Code;
