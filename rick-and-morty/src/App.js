import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Details from './components/Details';
import Home from './components/Home';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/details/:id" component={Details}></Route>
          </Switch>
        <Footer />
      </>
    </Router>
    )
}
export default App;
