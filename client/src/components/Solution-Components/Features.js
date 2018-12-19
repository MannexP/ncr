import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Solution from './images/solutionImage.png';

library.add(faCheckCircle)
library.add(faTimesCircle)


const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FeatureStyles = styled.div`
height: 1000px;
`
class Features extends Component {
  next = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  onChange = (event) => {
    this.props.handleChange(event)
  }
  render() {
    return (
      <FeatureStyles>
        <img src={Solution} alt="solution image" width="100%" />
        <Form color='green' >
          <SolutionStyles>
            <div>
              <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
            </div>
            <div className="grouped fields">
              <h1>Would you like any of these features?</h1>
              <p>Table layout  •  Transfer Tabs  •  Happy Hour Pricing  •  Forced Modifiers  •  Takeout or Delivery
            <br />
                Advanced Check Splitting  •  House Accounts  •  Multi-Station Kitchen Printer Routing  •  Barista or Kitchen Display</p>
              <div className="field">

                <div className="pretty p-icon p-plain p-tada">
                  <input type="radio" name="featureAnswer"
                    value="Yes" onClick={this.onChange} />
                  <div className="state p-primary-o">

                    <FontAwesomeIcon className='icon' icon={faCheckCircle} style={{ color: 'green' }} />
                    <label>Yes</label>
                  </div>
                </div>

                <div className="pretty p-icon p-plain p-tada">
                  <input type="radio" name="featureAnswer"
                    value="No" onClick={this.onChange} />
                  <div className="state p-primary-o">

                    <FontAwesomeIcon className='icon' icon={faTimesCircle} style={{ color: 'red' }} />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Icon onClick={this.next} aria-hidden="true" className="chevron right big"></Icon>
            </div>
          </SolutionStyles>
        </Form>
      </FeatureStyles>

    );
  }
}

export default Features;