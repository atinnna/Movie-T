import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import '@fortawesome/fontawesome-free/js/all.js';
import Main from './components/Main';
import {BrowserRouter as Router,Route, Routes,useLocation} from 'react-router-dom'
import Header from './components/Header';
import CurrentMovie from './components/CurrentMovie';
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route exact path='/currentMovie/:id' element={<CurrentMovie/> }/>
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


