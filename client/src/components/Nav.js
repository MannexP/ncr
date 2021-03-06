import React, { Component } from 'react';
import './assets/css/Nav.css';
import { Link } from "react-router-dom";
import ncrlogo from '../images/NCR logo.png';
import silverlogo from '../images/logo-large.png';
import search from '../images/magnifying-glass.png';
import cart from '../images/shopping-cart.png';
import profile from '../images/user.png';
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
              <li><Link to='/' className="titles"  onClick={this.handleClick } name='about' style={{color: '#FFFFFF' }}>ABOUT</Link></li>
              <li><Link to='/products' className="titles" style={{color: '#FFFFFF' }}>PRODUCTS</Link></li>
              <li><Link to='/build-a-solution' className="titles" style={{color: '#FFFFFF' }}>BUILD A SOLUTION</Link></li>
              <li><Link to='/' className="titles" style={{color: '#FFFFFF'}}>SUPPORT</Link></li>
              </ul>
            </div>
            <div className="icons">
            <ul className="nav-icons">
                <li><Link to='/checkout'><img src={cart} alt="cart" height="20px"/></Link></li>
                <li><Link to='/profile'><img src={profile} alt="profile" height="20px"/></Link></li>
                <li><Link to='/'><img src={search} alt="search" height="20px"/></Link></li>
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