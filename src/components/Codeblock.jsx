import { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import '../lib/highlightjs/styles/github-dark.min.css';
import php from 'highlight.js/lib/languages/php';

const Codeblock = ({ hasHighlight = true, language = '', isLineNumberDisabled = false, children }) => {
    if (hasHighlight === false) 
        return (<span className='font-[monospace]'>{children}</span>) 
    
    children = children.toString().replace(/^\s*[\r\n]+|^\s+|\s+$/gm, '');

    const codeRef = useRef(null);
  
  useEffect(() => {
    hljs.registerLanguage('php', php);
    hljs.highlightElement(codeRef.current);
  }, []);
  
  const codeLines = children.split('\n');

  return (
    <div className="flex" dir='ltr'>
      <div className={`line-numbers text-left select-none opacity-50 text-[0.78rem] mt-[0.95rem] ` + (isLineNumberDisabled ? `hidden` : ``)}>
        {codeLines.map((_, index) => (
          <span key={index} className="block">{index + 1}</span>
        ))}
      </div>
      <pre className='overflow-auto'>
        <code
          ref={codeRef}
          className={`font-[monospace] block bg-transparent hljs language-${language}`}
          dir='ltr'
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export default Codeblock;
