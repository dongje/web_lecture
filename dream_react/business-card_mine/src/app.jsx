
import { Component } from 'react';
import './app.css';
import { Link , Routes , Route , BrowserRouter } from 'react-router-dom';


import React from 'react';
import Login from './components/login/login';
import Cardmake from './components/cardmake/cardmake';

function App(props) {
  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/">home</Link>
        <Link to="/cardmake">profile</Link>
      </nav> */}
      <Routes>
        <Route path="/" exact  element={<Login />}  component={Login}/>
        <Route path="/login"  element={<Login />}  component={Login} />
          
        <Route path="/cardmake"  element={<Cardmake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


<App / >;



