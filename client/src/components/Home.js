import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Nav from './Nav';
// import Footer from './Footer';
import QuickPay from './QuickPay';
import ContactInfoForm from './ContactInfoForm';
import NextButton from './NextButton';

class Home extends Component {
  render() {
    return (
          <Router>
            <div>
          <Nav />
          <QuickPay />
          <ContactInfoForm />
          <NextButton />
                  
                {/* <Switch>
                  R
                </Switch> */}
              {/* <Footer /> */}
            </div>
          </Router>
    );
  }
}

export default Home;