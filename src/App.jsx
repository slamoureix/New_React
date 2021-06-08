import React from 'react';
import {Router, Switch} from 'react-router-dom';
import {createBrowserHistory as createHistory} from "history";
import {CreateRoutes} from './scripts/CreateRoutes';

import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const history = createHistory()

export default function App() {
  

  return (
    <Router history={history}>
      <ScrollToTop/> {/* composant qui gère le scroll vers le top */ }
      <Cursor/> 
        <Header/>
          <main>
          

            <Switch>
            {CreateRoutes()}
            </Switch>
          
          </main>
        <Footer/>
    </Router>
)
}


