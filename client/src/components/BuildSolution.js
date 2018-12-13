import React, { Component } from 'react';
import Customer from './Solution-Components/Customer';
import BusinessRun from './Solution-Components/BusinessRun';
import Confirmation from './Solution-Components/Confirmation';
import Success from './Solution-Components/Success';
import BusinessType from './Solution-Components/BusinessType';
import Features from './Solution-Components/Features';

class BuildSolution extends Component {
  state = {
    step: 1,
    customerAnswer: '',
    businessRunAnswer: '',
    businessTypeAnswer: '',
    featureAnswer: '',
    country: ''
}

nextStep = () => {
    const { step } = this.state
    this.setState({
        step : step + 1
    })
    console.log(step)
}

prevStep = () => {
    const { step } = this.state
    this.setState({
        step : step - 1
    })
}

handleChange = event => {
    this.setState({ [event.target.name] : event.target.value })
}

render(){
    const {step} = this.state;
    const { customerAnswer, businessRunAnswer, businessTypeAnswer, featureAnswer, country } = this.state;
    const values = { customerAnswer, businessRunAnswer, businessTypeAnswer, featureAnswer, country };
    switch(step) {
    case 1:
        return <Customer 
                nextStep={this.nextStep} 
                handleChange = {this.handleChange}
                values={values}
                />
    case 2:
        return <BusinessRun 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
    case 3:
        return <BusinessType 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
    case 4:
        return <Features 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
                values={values}
                />
    case 5:
        return <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
    case 6:
        return <Success />
    }
  }
}

export default BuildSolution;