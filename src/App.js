import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
import Creatures from './Creatures/Creatures';
import Currency from './Currency/Currency';
import Cyphers from './Cyphers/Cyphers';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Switch>
          <Route path='/' exact component= { Hero }/>
          <Route path='/creatures' component = { Creatures } />
          <Route path='/currency' component = { Currency } />
          <Route path='/cyphers' component = { Cyphers } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
