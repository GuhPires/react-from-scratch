import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const App = () => (
  <StrictMode>
    <h1>My React App!</h1>
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('app'));