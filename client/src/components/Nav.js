import React, { Component } from 'react';
import './assets/css/Nav.css';
import { Link } from "react-router-dom";
import ncrlogo from '../images/NCR logo.png';
import silverlogo from '../images/logo-large.png';
import cart from '../images/cart.png';
import profile from '../images/db33b0089e.png';
import { Icon } from 'semantic-ui-react';
class Nav extends Component {
  render() {
    return (
        <div className="grid-container">
        <div className="Logo">
        <Link to='/'><img src={ncrlogo} alt="ncrlogo" height="110px" width="100px"/></Link>
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
              {/* <li><Link to='/'><img src={search} alt="search" height="50px"/></Link></li> */}
              <li><Icon className="search huge"/></li>
                <li><Link to='/'><img src={profile} alt="profile" height="50px"/></Link></li>
                <li><Link to='/'><img src={cart} alt="cart" height="50px"/></Link></li>
              </ul>
            </div>
            <div className="Silver-Logo centered">
            </div>
          </div>
        </div>
    );
  }
}

export default Nav ;