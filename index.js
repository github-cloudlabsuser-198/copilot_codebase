import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea 
                value={markdown} 
                onChange={handleChange} 
            />
            <ReactMarkdown children={markdown} />
        </div>
    );
};

export default MarkdownEditor;

function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let reversedWords = words.reverse();
  let reversedSentence = reversedWords.join(' ');
  let capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
  return capitalizedSentence;
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
];
    
let names = data.flat().map(item => item.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']

let name1 = data.map(item => item.name);
console.log(names); // Output: ['John', 'Jane', 'Doe']