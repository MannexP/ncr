import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

class Features extends Component {
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
    return (
      <Form color='green' >
        <SolutionStyles>
        <div>
          <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
        </div>
        <div className="grouped fields">
          <label>Would you like any of these features</label>
          <p>Table layout  •  Transfer Tabs  •  Happy Hour Pricing  •  Forced Modifiers  •  Takeout or Delivery
            <br />
            Advanced Check Splitting  •  House Accounts  •  Multi-Station Kitchen Printer Routing  •  Barista or Kitchen Display</p>
          <div className="field">
            <input onClick={this.onChange} type="radio" name="featureAnswer" value="Yes" />
            <label> Yes</label>
            <input onClick={this.onChange} type="radio" name="featureAnswer" value="No" />
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

export default Features;