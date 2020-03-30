import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import Details from './components/Details';
import Home from './components/Home';

class App extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/details" component={Details}></Route>
          </Switch>
        </>
      </Router>
      )
  
  }
  
}

export default App;
