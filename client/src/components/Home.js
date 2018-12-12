import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
class Home extends Component {
  render() {
    return (
          <Router>
            <div>
              <Nav />
                  Home Component
                <Switch>
                  R
                </Switch>
              <Footer />
            </div>
          </Router>
    );
  }
}

export default Home;