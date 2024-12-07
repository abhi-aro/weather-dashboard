import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing the React DOM library to render components
import App from './App';  // Importing the main App component
import './index.css';  // Importing global CSS styles

// Render the App component inside the HTML element with the id "root"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>  {/* StrictMode helps in identifying potential problems in the app during development */}
    <App />  {/* Rendering the App component */}
  </React.StrictMode>,
);
