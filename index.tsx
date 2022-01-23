import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UsersProvider } from './contexts/UsersContext';

render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
