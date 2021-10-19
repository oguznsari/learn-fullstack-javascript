import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

setTimeout(() => {
  ReactDOM.render(
    <h2>unmount event after 4s</h2>,
    document.getElementById('root')
  );
}, 4000);
