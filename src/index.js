import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import '@fortawesome/fontawesome-free/js/all.js';
import Main from './components/Main';
import {BrowserRouter as Router,Route, Routes,useLocation} from 'react-router-dom'
import Header from './components/Header';
import CurrentMovie from './components/CurrentMovie';
import Negara from './components/Negara_movie';
import Genre from './components/Genre_movies';
import LoginRegister from './components/LoginRegister';
import Login from'./components/Login'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Main/>}/>

        <Route path='/loginRegister' element={<LoginRegister/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/currentMovie/:id' element={<CurrentMovie/> }/>
        <Route path='/negara/:id' element={<Negara/>}/>
        <Route path='/filter/:id' element={<Genre/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


