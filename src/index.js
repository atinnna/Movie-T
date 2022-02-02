import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
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


reportWebVitals();
