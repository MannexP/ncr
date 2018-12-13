import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components'

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .next{
    float: right;
  }

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
      <h1 className="ui centered"></h1>
        <SolutionStyles>
          <div>
          <Form.Field>
              <label>First Name</label>
              <input
              placeholder='First Name'
              onChange={this.props.handleChange('firstName')}
              defaultValue={values.firstName}
              />
          </Form.Field>
          <Form.Field>
              <label>Last Name</label>
              <input
              placeholder='Last Name'
              onChange={this.props.handleChange('lastName')}
              defaultValue={values.lastName}
              />
          </Form.Field>
          <Form.Field>
              <label>Email Address</label>
              <input
              type='email'
              placeholder='Email Address'
              onChange={this.props.handleChange('email')}
              defaultValue={values.email}
              />
          </Form.Field>
          </div>
          <div>
            <Button className="next" onClick={this.next}>Next </Button>
          </div>
        </SolutionStyles>
    </Form>
    );
  }
}

export default Customer;