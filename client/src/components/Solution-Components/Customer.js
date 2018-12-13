import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components'

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
  render() {
    const { values } = this.props
    return (
      <Form color='green' >
        <SolutionStyles>
          <div class="grouped fields">
              <label>HTML radios</label>
              <div class="field">
              <label>
              <input type="radio" name="htmlRadios"/> This one</label>
            </div>
            <div class="field">
              <label>
              <input type="radio" name="htmlRadios"/> That one</label>
            </div>
          </div>
          <div><i aria-hidden="true" className="angle right"></i></div>
        </SolutionStyles>
    </Form>
    );
  }
}

export default Customer;