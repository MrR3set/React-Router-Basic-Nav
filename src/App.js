import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />

        <Route path="/home" component={Home}/>
        <Route path="/about" >
          <About/>
        </Route>
      <Route path="/contact">
          <Contact/>
        </Route>
 
  </div>
);

export default App;
