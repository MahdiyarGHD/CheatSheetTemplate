import React from 'react';
import hljs from 'highlight.js';
import '../lib/highlightjs/styles/github-dark.min.css';

const FlexTable = () => {
  const classes = [
    { class: 'flex-row', properties: 'flex-direction: row;' },
    { class: 'flex-row-reverse', properties: 'flex-direction: row-reverse;' },
    { class: 'flex-col', properties: 'flex-direction: column;' },
    { class: 'flex-col-reverse', properties: 'flex-direction: column-reverse;' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="px-6 py-3 text-gray-600 dark:text-gray-400">Class</th>
            <th className="px-6 py-3 text-gray-600 dark:text-gray-400">Properties</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-3">
                <pre>
                  <code className="language-css">
                    {hljs.highlight(item.class, { language: 'css' }).value}
                  </code>
                </pre>
              </td>
              <td className="px-6 py-3">
                <pre>
                  <code className="language-css">
                    {hljs.highlight(item.properties, { language: 'css' }).value}
                  </code>
                </pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlexTable;
