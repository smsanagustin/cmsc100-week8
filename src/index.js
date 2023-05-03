import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'; // import App function from App.js
// import reportWebVitals from './reportWebVitals';

// fetches the root div from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// renders components to the root div
// <App /> means calling the App function from App.js
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
