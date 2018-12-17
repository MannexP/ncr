import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Iframe from 'react-iframe';

class ThankYou extends Component {
    render() {
        return (
            <div>
                <h1>Thank you for your oder!</h1>
                <h3>Hi insert name here, we're processing your oder and getting it ready to ship. A confirmation email has been sent to insert email here</h3>
                <button class="ui blue button">Print Order Summary</button>
                <h4>Payment:</h4>
                <h4>Shipping:</h4>
                <h4>Address:</h4>

                <Link to='/'>Edit Order</Link>
                <Link to='/'>Return to store</Link>
                <h3>FedEx Tracking: #</h3>
                <hr width="50%"/>
                <h2>24/7 Customer Support</h2>
                <h3>Call 1-800-NCR-HELP</h3> <h2>OR</h2> <h3>Chat online at ncrsilver.com</h3>
            </div>
        );
    }
}

export default ThankYou;