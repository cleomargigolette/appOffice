import React, { Component } from 'react';
//import { Login } from './site/page/login/Login.js';
import { Site } from './site/page/site/Site.js';
import { Login } from './site/page/login/Login.js';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Site} path='/' exact />
        <Route component={Login} path='/login' exact />
          
      </div>
    );
  }
}

export default App;
