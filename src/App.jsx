import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import AllRoutes from './components/AllRoutes/AllRoutes';

export default function App() {
    
  return (
    <Router>
      <ScrollToTop/> {/* composant qui gère le scroll vers le top */ }
      <Cursor/> 
        <Header/>
          <main>
          <AllRoutes/>
          </main>
        <Footer/>
    </Router>
)
}


