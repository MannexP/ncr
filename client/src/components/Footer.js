import React, { Component } from 'react';
import styled from 'styled-components'
import './assets/Footer.css'



const Buffer = styled.div`
  margin-top:25px;
  `

const FooterBar = styled.div`
display: grid;

footer {
  color: white;
  background: #262222;
  padding: 1rem;
  height: 15rem;
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
    display: flex;
    flex-direction: column;
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
                {/* <li>NCR SILVER </li> */}
                <div className='list'>
                  <li style={{ fontWeight: 'bold' }}>NCR SILVER </li>
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
                <div></div>
                <div className='list'>
                <Buffer>
                    <div></div>
                  </Buffer>
                  <li>Login</li>
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

                <div className='list'>
                  <li style={{ fontWeight: 'bold' }}>Industries Served </li>
                  <li>Retail</li>
                  <li>Restaurant</li>
                  <li>Cafes</li>
                  <li>Bars</li>
                  <li>Gift Shops</li>
                </div>
              </ul>
            </div>
          </footer>
        </FooterBar>
        <FooterBar>
          <footer>
            <div className="ncr-silver">
              <ul>
                <div className='list'>
                  <Buffer>
                    <div></div>
                  </Buffer>
                  <li>Services</li>
                  <li>Bakeries</li>
                  <li>Liquor Store</li>
                  <li>Vape Shop</li>
                  <li>Food Trucks</li>
                </div>
              </ul>
            </div>
          </footer>
        </FooterBar>

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