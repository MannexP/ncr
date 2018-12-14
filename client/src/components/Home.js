import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import BuildSolution from './BuildSolution';
import Checkout from './Checkout';
class Home extends Component {
  render() {
    return (
          <Router>
            <div>
              <Nav />
                <Switch>
                  <Route exact path='/build-a-solution' component={BuildSolution} />
            <Route exact path='/checkout' component={Checkout} />
                </Switch>
              <Footer />
            </div>
          </Router>
    );
  }
}

export default Home;