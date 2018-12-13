import React, { Component } from 'react';
import './assets/css/Nav.css';
import { Link } from "react-router-dom";
import ncrlogo from '../images/NCR logo.png';
import silverlogo from '../images/logo-large.png';
import cart from '../images/cart.png';
import profile from '../images/db33b0089e.png';
import search from '../images/search.jpg';
class Nav extends Component {
  render() {
    return (
        <div class="grid-container">
        <div class="Logo">
        <Link to='/'><img src={ncrlogo} alt="ncrlogo" height="110px" width="100px"/></Link>
        </div>
          <div class="Right">
            <div class="Nav">
              <ul class="flexed">
              <li><Link to='#' style={{ textDecoration: 'none', color: '#FFFFFF' }}>About</Link></li>
              <li><Link to='#' style={{ textDecoration: 'none', color: '#FFFFFF' }}>Products</Link></li>
              <li><Link to='#' style={{ textDecoration: 'none', color: '#FFFFFF' }}>Build A Solution</Link></li>
              <li><Link to='#' style={{ textDecoration: 'none', color: '#FFFFFF'}}>Support</Link></li>
              </ul>
            </div>
            <div class="icons">
            <ul class="flexed">
                <li><Link to='/'><img src={search} alt="search" height="50px"/></Link></li>
                <li><Link to='/'><img src={profile} alt="profile" height="50px"/></Link></li>
                <li><Link to='/'><img src={cart} alt="cart" height="50px"/></Link></li>
              </ul>
            </div>
            <div class="Silver-Logo centered">
            <Link to='/'><img src={silverlogo} alt="silverlogo" height="110px" width="300px"/></Link>
            </div>
          </div>
        </div>
    );
  }
}

export default Nav ;