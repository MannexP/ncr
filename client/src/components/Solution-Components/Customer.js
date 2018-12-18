import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'
// import build from './images/build.png';
import Solution from './images/solutionImage.png';
import yes from './images/yes.png';
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
`
const BuildSolutionStyle = styled.div`
height: 1000px;
`
const Header = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`
const SubHeader = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`
const Choices = styled.div`
display: flex;
justify-content: center;
`
const IconStyles = styled.div`
margin-top: 43px;
`

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
      <BuildSolutionStyle>
        <div>
          <Form color="green">
            <img src={Solution} alt="solution image" width="100%" />
            {/* <img src={build} alt="build image" width="100%" /> */}
            {/* <img src={answer} alt="build image" width="100%" /> */}
            <Header>
              <h1>Build your Solution</h1>
            </Header>
            <SubHeader>
              <h3> Answer a few short questions to help us determine the best solution for your business. </h3>
            </SubHeader>
            <SolutionStyles>
              <div className="grouped fields">
                <h3>Are you an existing customer?</h3>
                <br />
                <Choices>
                <div className="pretty p-icon p-plain p-tada">
                  <input type="radio" name="customerAnswer"
                    value="Yes" onClick={this.onChange} />
                  <div className="state p-primary-o">
                 
                    <FontAwesomeIcon className='icon' icon={faCheckCircle} style={{ color: 'green' }} />
                    <label>Yes</label>
                  </div>
                </div>
                <div className="pretty p-icon p-plain p-tada">
                  <input type="radio" name="customerAnswer"
                    value="No" onClick={this.onChange} />
                  <div className="state p-primary-o">

                    <FontAwesomeIcon className='icon' icon={faTimesCircle} style={{ color: 'red' }} />
                    <label>No</label>
                  </div>
                </div>
                    
                    </Choices>
                

              </div>

              <div>
                <IconStyles>
                  <Icon
                    onClick={this.next}
                    aria-hidden="true"
                    className="chevron right big"
                  />
                </IconStyles>
                
              </div>
            </SolutionStyles>
          </Form>
        </div>
      </BuildSolutionStyle>
    );
  }
}
export default Customer;