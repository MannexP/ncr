import React, { Component } from 'react';
import QuickPay from './Checkout-Components/QuickPay';
import ContactInfoForm from './Checkout-Components/ContactInfoForm';
import NextButton from './Checkout-Components/NextButton';
import ShippingForm from './Checkout-Components/ShippingForm';

class Checkout extends Component {
  render() {
    return (
      <div>
        <QuickPay />
        <ContactInfoForm />
        <NextButton />
        <ShippingForm />
        <NextButton />
      </div>
    );
  }
}

export default Checkout;