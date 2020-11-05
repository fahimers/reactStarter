import React from 'react';
import ReactDOM from 'react-dom';
console.log('test');
// React.createElement('div', null, 'React element!');

const element = <div>React element JSX!</div>
console.log('test2');

ReactDOM.render(element, document.getElementById('root'));