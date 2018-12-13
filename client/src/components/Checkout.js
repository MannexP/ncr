import React, { Component } from 'react';
import QuickPay from './QuickPay';
import ContactInfoForm from './ContactInfoForm'

class Checkout extends Component {
  render() {
    return (
      <div>
        <QuickPay />
        <ContactInfoForm />
      </div>
    );
  }
}

export default Checkout;