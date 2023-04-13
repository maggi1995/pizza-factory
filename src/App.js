import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/HeaderComponent/Header';
import { Home } from './components/Home';
import { Menu } from './components/MenuComponent/Menu';
import Footer from './components/FooterComponent/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VegetarianPizza from './components/MenuComponent/VegetarianPizza';
import Sides from './components/MenuComponent/Sides';
import NonVegetarianPizza from './components/MenuComponent/NonVegetarianPizza';

function App() {
  return (
    <>
      {/* <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}/>
            </Routes>
          </BrowserRouter><br/>
          <Home/><br/>
          <Menu/><br/>
          <Footer/> */}
      <Router>
        <div className="grid-container noselect">
          <Header />
          <Home /><br/>
          {/* <Menu /><br /> */}
          <main className="main-content noselect">
            <Routes>
            <Route path='/' element={<Menu/>} />
              <Route exact path="/vegetarianPizza" element={<VegetarianPizza/>} />
              <Route exact path="/non-vegetarianPizza" element={<NonVegetarianPizza/>} />
              <Route exact path="/sides" element={<Sides/>} />
            </Routes>
          </main><br/>
          <Footer />
        </div>
      </Router>

    </>
  );
}

export default App;
