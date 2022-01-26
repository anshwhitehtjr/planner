import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppState from './Context/AppState';

ReactDOM.render(
  <React.StrictMode>
    <AppState>
      <App />
    </AppState>
  </React.StrictMode>,
  document.querySelector("app-root")
);
