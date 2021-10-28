import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.render(
//     <h2>Clear !!</h2>,
//     document.getElementById('root')
//   );
// }, 5000);