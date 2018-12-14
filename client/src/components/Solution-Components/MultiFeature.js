import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

class MultiFeature extends Component {
  next = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  onChange = (event) => {
    console.log(this.props.values)
    this.props.handleChange(event)
  }
  render() {
    return (
      <Form color='green' >
        <SolutionStyles>
        <div className="grouped fields">
          <label>Which of these features would you like to include?</label>
          <div className="field">
          <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Advance Reporting/Forcasting" />
            <label>Advance Reporting/Forcasting</label>
            <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Inventory Management" />
            <label>Inventory Management</label>
            <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Employee Scheduling" />
            <label> Employee Scheduling</label>
            <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="None of These" />
            <label>None of These</label>
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

export default MultiFeature;