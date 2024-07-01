import { useEffect } from 'react';
import hljs from 'highlight.js';
import '../lib/highlightjs/styles/github-dark.min.css';
import php from "../lib/highlightjs/php.min.js";

const Codeblock = ({language = '', children}) => {
    useEffect(() => {
        console.log(children);
        hljs.registerLanguage('php', php);
        hljs.highlightAll();
      }, []);
    
    return <>
        <pre>
            <code className={`bg-transparent text-left hljs language-` + language} dir='ltr'>
                {children.replace(/(^\s+)|(^\n+)|(\n+$)/gm, '')}
            </code>
        </pre>
        
    </>    
}

export default Codeblock;