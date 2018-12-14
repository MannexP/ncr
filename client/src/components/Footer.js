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
h5{
  font-weight: lighter;
}

ul{
  list-style-type: none;
}
li{
  font-size: 20px;
}
.list{
    font-weight: 200;
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
      <div className="grid-container2">
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <div className='list'>
                  <li>About</li>
                  <li>Products</li>
                  <li>Build A Solution</li>
                  <li>Support</li>
                </div>
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

          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <div className='list'>
                  <li>About</li>
                  <li>Products</li>
                  <li>Build A Solution</li>
                  <li>Support</li>
                </div>
              </ul>
            </div>
          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <div className='list'>
                  <li>About</li>
                  <li>Products</li>
                  <li>Build A Solution</li>
                  <li>Support</li>
                </div>
              </ul>
            </div>
          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <li>NCR SILVER </li>
                <div className='list'>
                  <li>About</li>
                  <li>Products</li>
                  <li>Build A Solution</li>
                  <li>Support</li>
                </div>
              </ul>
            </div>
          </footer>
        </FooterBar>
        {/* <FooterBar>
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
        </FooterBar> */}
        <FooterBar>
          <footer>
            <h5>>Sign up for Our Webinar</h5>
            <form>
              <input type="text" placeholder="Enter Email" />
            </form>
          </footer>
        </FooterBar>
      </div>
    );
  }
}

export default Footer;