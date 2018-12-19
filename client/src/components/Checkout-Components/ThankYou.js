import React, { Component } from 'react';
import { Link } from "react-router-dom";
import map from '../../images/map.png';
import '../assets/css/ThankYou.css';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-around;
font-family: 'Raleway', sans-serif;


`
const Support = styled.div`
display: flex;
justify-content: space-around;
/* height: 100px; */
margin-top: 100px;
font-family: 'Raleway', sans-serif;
`


class ThankYou extends Component {
    render() {
        return (
            <div>
               
                    <h1 className="thanks">Thank you for your order!</h1>
                    
                
                
                <button className="ui blue button" id="print">Print Order Summary</button>
                
                <Container>
                    <div className="payment">
                <h4>Payment: Visa Debit ending in 4555 Exp 11/21</h4>
                <h4>Shipping: FedEx Ground 5-7 Business Days</h4>
                <h4>Address: 300 17th Street NW, Suite 24 Atlanta, Ga 30363</h4>
                
                <Link to='/'>Edit Order</Link>
                <Link to='/'>Return to store</Link>
                </div>
                <div>
                <h3>FedEx Tracking: <span  style={{textDecoration: 'underline'}}>#000555777</span></h3>
                        <img src={map} alt="" />
                        </div>
                    </Container>   
                <hr width="50%" />
                <Support>
                    <h2 className="support">24/7 Customer Support</h2>
                    </Support>
                    <Support>  
                <h3>Call 1-800-NCR-HELP</h3> <h2 className="or">OR</h2> <h3>Chat online at ncrsilver.com</h3>
                </Support>
            </div>
        );
    }
}

export default ThankYou;