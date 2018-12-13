import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apple from '../images/applypay.png';
import google from '../images/googlepay.png';
import paypal from '../images/paypalpay.png';

class QuickPay extends Component {
    render() {
        return (
            <div>
                <h2>Quick Buy:</h2>
                <br />
                <Link to="/"><img src={apple} alt="applepay" height="60px" width="100px" /></Link>
                <Link to="/"><img src={google} alt="googlepay" height="60px" width="100px" /></Link>
                <Link to="/"><img src={paypal} alt="paypalpay" height="60px" width="150px" /></Link>
                <br />
                <h2>Order Information:</h2>
            </div>
        );
    }
}

export default QuickPay;