import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

class BusinessType extends Component {
  next = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}
  onChange = (event) => {
    this.props.handleChange(event)
  }
  render() {
    console.log("hit")
    return (
      <Form color='green' >
        <SolutionStyles>
        <div>
          <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
        </div>
        <div className="grouped fields">
          <label>What type of business are you?</label>
          <div className="field">
          <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Full Service Resturant" />
            <label>Full Service Resturant</label>
            <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Retail" />
            <label>Retail</label>
            <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Service" />
            <label> Service</label>
            <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Cafe or Food Truck" />
            <label>Cafe or Food Truck</label>
          </div>
        </div>
          <div>
            <Icon onClick={this.next} aria-hidden="true" className="chevron right big"></Icon>
          </div>
        </SolutionStyles>
      </Form>
    );
  }
}

export default BusinessType;