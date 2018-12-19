import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apple from '../../images/applepay.png';
import google from '../../images/googlepay.png';
import paypal from '../../images/paypalpay.png';
import styled from "styled-components";

const QuickPaySyle = styled.div`
	.quickStyle{
		padding:5px;
		border: 1px solid white;
		border-radius: 10px;
		box-shadow: 1px 1px 3px black;
		margin-right: 10px;
		margin-bottom: 20px;
	}
`
class QuickPay extends Component {
	render() {
		return ( 
			<QuickPaySyle>
				<h2>Quick Buy:</h2>
				<br />
				<Link to="#"><img className="quickStyle" src={apple} alt="applepay" height="50px" /></Link>
				<Link to="#"><img className="quickStyle" src={google} alt="googlepay" height="50px"/></Link>
				<Link to="#"><img className="quickStyle" src={paypal} alt="paypalpay" height="50px"/></Link>
				<br />
				<h2>Order Information:</h2>
			</QuickPaySyle>
		);
	}
}

export default QuickPay;
