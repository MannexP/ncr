import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import Solution from './images/solutionImage.png';

library.add(faStore)

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const BusinessRunStyle = styled.div`
height: 1000px;
font-family: 'Raleway', sans-serif;
`
const Choices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const Header = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`
const IconStyles = styled.div`
margin-top: 90px;
margin-right: 120px;

`
const IconStylesL = styled.div`
margin-top: 100px;

`
const Build = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
font-size: 

`

class BusinessType extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
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
      <BusinessRunStyle>
        <img src={Solution} alt="solution image" width="100%" />
        <Form color='green' >
          <SolutionStyles>
            <div>
              <IconStylesL>
                <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
              </IconStylesL>
              
            </div>
            <div className="grouped fields">
            <Build>
              <h1>Build Your Solution</h1>
            </Build>
              <Header>
                <h1>What kind of business do you run?</h1>
              </Header>

              <Choices>
                <div className="field">
                  <div className="pretty p-icon p-plain p-tada">
                    <input type="radio" onClick={this.onChange} name="businessRunAnswer" value="Single Location" />
                    <div className="state p-primary-o">
                      <FontAwesomeIcon className='icon' icon={faStore} style={{ color: 'green' }} />
                      <label>Single Location</label>
                    </div>
                  </div>

                  <div className="pretty p-icon p-plain p-tada">
                    <input type="radio" onClick={this.onChange} name="businessRunAnswer" value="Multi Locaiton" />
                    <div className="state p-primary-o">
                      <FontAwesomeIcon className='icon' icon={faStore} style={{ color: 'green' }} />
                      <label>Multi-Location</label>
                    </div>
                  </div>

                  <div className="pretty p-icon p-plain p-tada">
                    <input type="radio" onClick={this.onChange} name="businessRunAnswer" value="Franchise" />
                    <div className="state p-primary-o">
                      <FontAwesomeIcon className='icon' icon={faStore} style={{ color: 'green' }} />
                      <label>Franchise</label>
                    </div>
                  </div>
                </div>

              </Choices>
            </div>
            <div>
              <IconStyles>
                 <Icon onClick={this.next} aria-hidden="true" className="chevron right big"></Icon>
              </IconStyles> 
            </div>
          </SolutionStyles>
        </Form>
      </BusinessRunStyle>
    )
  }
}

export default BusinessType;