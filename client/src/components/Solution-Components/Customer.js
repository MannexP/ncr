import React, { Component } from "react";
import { Form, Icon } from "semantic-ui-react";
import styled from "styled-components";


import Solution from "./images/solutionImage.png";

import '../../index';
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
`;

class Customer extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  onChange = event => {
    this.props.handleChange(event);
  };
  render() {
    return (
      <div>
        <Form color="green">
          <img src={Solution} alt="solution image" width="100%" />
          {/* <img src={build} alt="build image" width="100%" /> */}
          {/* <img src={answer} alt="build image" width="100%" /> */}
          <h1>Build your Solution</h1>
          <h3>
            Answer a few short questions to help us determine the best solution
            for your business.
          </h3>
          <SolutionStyles>
            <div className="grouped fields">
              <label>Are you an existing customer?</label>
              <br />
              <div className="pretty p-icon p-plain p-tada">
                <input type="radio" name="customerAnswer"
                  value="Yes" onClick={this.onChange}/>
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faCheckCircle} style={{ color: 'green'}}/>
                  <label>Yes</label>
                </div>
              </div>
           
              <div className="field">
      

                
              <div className="pretty p-icon p-plain p-tada">
                <input type="radio" name="customerAnswer"
                  value="No" onClick={this.onChange}/>
                <div className="state p-primary-o">
                  
                  <FontAwesomeIcon className= 'icon' icon={faTimesCircle} style={{ color: 'red'}}/>
                  <label>No</label>
                </div>
              </div>
       

              </div>
            </div>
            <div>
              <Icon
                onClick={this.next}
                aria-hidden="true"
                className="chevron right big"
              />
            </div>
          </SolutionStyles>
        </Form>
      </div>
    );
  }
}

export default Customer;