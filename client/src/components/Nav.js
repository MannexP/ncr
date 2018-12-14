import React, { Component } from 'react';
import './assets/css/Nav.css';
import { Link } from "react-router-dom";
import ncrlogo from '../images/NCR logo.png';
import silverlogo from '../images/logo-large.png';
import search from '../images/magnifying-glass.png';
import cart from '../images/shopping-cart.png';
import profile from '../images/user.png';
import { Icon } from 'semantic-ui-react';
class Nav extends Component {
  render() {
    return (
        <div className="grid-container">
        <div className="Logo">
        <Link to='/'><img src={ncrlogo} alt="ncrlogo" height="110px" width="100px" className="ncrImage"/></Link>
        </div>
          <div className="Right">
            <div className="Nav">
              <ul className="flexed">
              <li><Link to='#' className="titles" style={{ textDecoration: 'none', color: '#FFFFFF' }}>ABOUT</Link></li>
              <li><Link to='#' className="titles" style={{ textDecoration: 'none', color: '#FFFFFF' }}>PRODUCTS</Link></li>
              <li><Link to='#' className="titles" style={{ textDecoration: 'none', color: '#FFFFFF' }}>BUILD A SOLUTION</Link></li>
              <li><Link to='#' className="titles" style={{ textDecoration: 'none', color: '#FFFFFF'}}>SUPPORT</Link></li>
              </ul>
            </div>
            <div className="icons">
            <ul className="flexed">
                <li><Link to='/'><img src={search} alt="search" height="50px"/></Link></li>
                <li><Link to='/create-profile'><img src={profile} alt="profile" height="50px"/></Link></li>
                <li><Link to='/'><img src={cart} alt="cart" height="50px"/></Link></li>
              </ul>
            </div>
          <div className="Silver-Logo centered">
            <h2><Link to='/' className="titles silver" style={{ textDecoration: 'none', color: '#FFFFFF'}}>SILVER</Link></h2>
            </div>
          </div>
        </div>
    );
  }
}

export default Nav ;