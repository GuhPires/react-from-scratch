import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import image from '../public/images/Image.png';
import '../public/favicon.ico';

import './main.css';

const App = () => (
  <StrictMode>
    <h1>My React App</h1>
    <img src={image} />
    <Home />
  </StrictMode>
);

ReactDOM.render(<App />, document.getElementById('app'));