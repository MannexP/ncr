import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';
import BuildSolution from './BuildSolution';
import Checkout from './Checkout';
import Product from './Product';
import CreateProfile from './CreateProfile';
import ThankYou from './Checkout-Components/ThankYou';
import LandingPage from './LandingPage';
class Home extends Component {
  render() {
    return (
          <Router>
            <div>
              <Nav />
                <Switch>
                  <Route exact path='/build-a-solution' component={BuildSolution} />
                  <Route exact path='/checkout' component={Checkout} />
                  <Route exact path='/products' component={Product} />
                  <Route exact path='/create-profile' component={CreateProfile} />
                  <Route exact path='/ThankYou' component={ThankYou} />
                  <Route path='/' component={LandingPage} />
         
                </Switch>
              <Footer />
            </div>
          </Router>
    );
  }
}

export default Home;