import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {}, 'Lets build html from javascript');
const heading2 = React.createElement('h2', {}, 'Its so powerful and cool');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([heading1, heading2]);
