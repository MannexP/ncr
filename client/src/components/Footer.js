import React, { Component } from 'react';
import styled from 'styled-components'
import './assets/Footer.css'



const FooterBar = styled.div`

footer {
  color: white;
  background: #262222;
  padding: 1rem;
  height: 150px;
  text-align: left;
  padding-left: 50px;
}
.ncr-silver{
  font-weight: bold;
}

ul{
  list-style-type: none;
}

input{
  border-radius:5px;
  float: right;
  margin-right: 20px;
}

`

class Footer extends Component {
  render() {
    return (
      <div className="grid-container">
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <li>About</li>
                <li>Products</li>
                <li>Build A Solution</li>
                <li>Support</li>
              </ul>
            </div>
            {/* <div>
                  Industries Served
                  <ul>
                    <li>Retail</li>
                    <li>Restaurant</li>
                    <li>Cafes</li>
                    <li>Bars</li>
                    <li>Gift Shops</li>
                    <li>Services</li>
                    <li>Bakeries</li>
                    <li>Liquor Store</li>
                    <li>Vape Shop</li>
                    <li>Food Trucks</li>
                  </ul>
                </div> */}
            <form>
              <input type="text" placeholder="Enter Email" />
            </form>
          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <li>About</li>
                <li>Products</li>
                <li>Build A Solution</li>
                <li>Support</li>
              </ul>
            </div>
          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <li>About</li>
                <li>Products</li>
                <li>Build A Solution</li>
                <li>Support</li>
              </ul>
            </div>
          </footer>
        </FooterBar>
      </div>
    );
  }
}

 export default Footer;