import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)
library.add(faTimesCircle)


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
          <label>Which of these features would you like to include?</label>
          <div className="field">

               <div className="pretty p-icon p-plain p-tada">
                <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Advance Reporting/Forcasting"/>
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faCheckCircle} style={{ color: 'green'}}/>
                  <label>Advance Reporting/Forcasting</label>
                </div>
              </div>

            
              
              <div className="pretty p-icon p-plain p-tada">
              <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Inventory Management" />
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faCheckCircle} style={{ color: 'green'}}/>
                  <label>Inventory Management</label>
                </div>
              </div>

            
              
              <div className="pretty p-icon p-plain p-tada">
              <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="Employee Scheduling" />
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faCheckCircle} style={{ color: 'green'}}/>
                  <label> Employee Scheduling</label>
                </div>
              </div>

            
              
              <div className="pretty p-icon p-plain p-tada">
              <input onClick={this.onChange} type="checkbox" name="multiFeatureAnswer" value="None of These" />
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faTimesCircle} style={{ color: 'red'}}/>
                  <label>None of These</label>
                </div>
              </div>
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