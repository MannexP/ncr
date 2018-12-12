import React, { Component } from 'react';
import './assets/css/Nav.css'

class Nav extends Component {
  render() {
    return (
        <div class="grid-container">
          <div class="Logo">Logo</div>
          <div class="Right">
            <div class="Nav">
              <ul class="flexed">
                <li><a href='#'>About</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Build A Solution</a></li>
                <li><a href='#'>Support</a></li>
              </ul>
            </div>
            <div class="icons">
            <ul class="flexed">
                <li><a href='#'>Search</a></li>
                <li><a href='#'>Profile</a></li>
                <li><a href='#'>Cart</a></li>
              </ul>
            </div>
            <div class="Silver-Logo centered">
            Silver logo
            </div>
          </div>
        </div>
    );
  }
}

export default Nav ;