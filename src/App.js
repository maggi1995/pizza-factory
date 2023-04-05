import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header} from './components/HeaderComponent/Header';
import { Home } from './components/Home';
import { Menu } from './components/MenuComponent/Menu';

function App() {
  return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}/>
            </Routes>
          </BrowserRouter><br/>
          <Home/><br/>
          <Menu/>

        </>
  );
}

export default App;
