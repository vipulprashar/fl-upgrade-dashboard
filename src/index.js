import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/tailwind.css';
import './App.css';
//import { Windmill } from '@windmill/react-ui'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import and configure Tailwind CSS
// import { CacheProvider } from '@emotion/react';
// import { Global, css } from '@emotion/react';
// import { createGlobalStyle } from 'styled-components';
// import './tailwind.output.css';

/*const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();