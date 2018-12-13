import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
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
  onChange = (event) => {
    this.props.handleChange(event)
  }
  render() {
    return (
      <Form color='green' >
        <h1 className="ui centered"></h1>
        <SolutionStyles>
        <div className="grouped fields">
          <label>Are you an existing customer?</label>
          <div className="field">
            <input onClick={ (event) => this.onChange(event)} type="radio" name="customerAnswer" value="Yes" />
            <label> Yes</label>
            <input onClick={ (event) => this.onChange(event)} type="radio" name="customerAnswer" value="No" />
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