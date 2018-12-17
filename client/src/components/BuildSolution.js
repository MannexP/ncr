import React, { Component } from 'react';
import Customer from './Solution-Components/Customer';
import BusinessRun from './Solution-Components/BusinessRun';
import Confirmation from './Solution-Components/Confirmation';
import BusinessType from './Solution-Components/BusinessType';
import Features from './Solution-Components/Features';
import MultiFeature from './Solution-Components/MultiFeature';
import SolutionProducts from './Solution-Components/SolutionProducts';
class BuildSolution extends Component {
	state = {
		step: 1,
		customerAnswer: '',
		businessRunAnswer: '',
		businessTypeAnswer: '',
		featureAnswer: '',
		multiFeatureAnswer: []
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step : step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step : step - 1
    })
  }

  handleChange = event => {
    if(event.target.name === 'multiFeatureAnswer'){
      if(event.target.checked === true){
        const expandState = [...this.state.multiFeatureAnswer, event.target.value ]
        this.setState({ multiFeatureAnswer: expandState })
      }else{
        const newList = [...this.state.multiFeatureAnswer].filter(list => {
          return list !== event.target.value
        })
        this.setState({ multiFeatureAnswer: newList })
      }
    } else {
      this.setState({ [event.target.name] : event.target.value })
    }

  }

  render() {
	  const {step} = this.state;
	  const { customerAnswer, businessRunAnswer, businessTypeAnswer, featureAnswer, multiFeatureAnswer } = this.state;
	  const values = { customerAnswer, businessRunAnswer, businessTypeAnswer, featureAnswer, multiFeatureAnswer };
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
      return <MultiFeature
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange = {this.handleChange}
        values={values}
        />
    case 6:
      return <Confirmation
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        values={values}
        />
    case 7:
      return <SolutionProducts />
    default:
      return <Customer 
      nextStep={this.nextStep} 
      handleChange = {this.handleChange}
      values={values}
      />
    }
   
	}
}

export default BuildSolution;
