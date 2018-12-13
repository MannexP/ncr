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
    e.preventDefault();
    this.props.nextStep();
  }

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

  onChange = (event) => {
    this.props.handleChange(event)
  }

render(){
    return(
      <Form color='green' >
        <h1 className="ui centered"></h1>
        <SolutionStyles>
          <div>
            <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
          </div>
          <div className="grouped fields">
            <label>What kind of business do you run?</label>
            <div className="field">
              <input onClick={ (event) => this.onChange(event)} type="radio" name="businessRun" value="Single Location" />
              <label> Single Location</label>
              <input onClick={ (event) => this.onChange(event)} type="radio" name="businessRun" value="Multi Locaiton" />
              <label> Multi Locaiton</label>
              <input onClick={ (event) => this.onChange(event)} type="radio" name="businessRun" value="Franchise" />
              <label> Franchise</label>
            </div>
          </div>
          <div>
            <Icon onClick={this.next} aria-hidden="true" className="chevron right big"></Icon>
          </div>
        </SolutionStyles>
      </Form>
    )
  }
}

export default BusinessType;