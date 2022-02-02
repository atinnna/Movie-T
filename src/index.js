import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/style.css'
// import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
