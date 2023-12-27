import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const rootElem = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Rendering the App component into the root element
rootElem.render(<App />);


