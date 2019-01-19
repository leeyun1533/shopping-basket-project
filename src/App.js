import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ItemList, Basket } from './pages';
import Header from './components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Route exact path="/" component={ItemList}/>
          <Route path="/basket" component={Basket}/>
      </div>
    );
  }
}

export default App;
