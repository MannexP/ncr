import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'
// import build from './images/build.png';
import Solution from './images/solutionImage.png';
import yes from './images/yes.png';

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

class Customer extends Component {
  next = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  onChange = (event) => {
    this.props.handleChange(event)
  }
  render() {
    return (
    
      <Form color='green' >
      <img src={Solution} alt="solution image" width="100%" />
      <h1>Build Your Solution</h1>
      <h3>Answer a few short questions to help us determine the best solution for your business.</h3>
        <SolutionStyles>
        <div className="grouped fields">
          <label>Are you an existing customer?</label>
          <div className="field">
              <input onClick={this.onChange} type="radio" name="customerAnswer" value="Yes" />
              {/* <img class="image" src={yes} /> */}
              
            <label> Yes</label>
            <input onClick={this.onChange} type="radio" name="customerAnswer" value="No" />
            <label> No</label>
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

export default Customer;