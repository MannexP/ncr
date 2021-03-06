import React, { Component } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCut } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import Solution from './images/solutionImage.png';


library.add(faUtensils)
library.add(faShoppingCart)
library.add(faCut)
library.add(faMugHot)

const SolutionStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BusinessTypeStyle = styled.div`
height: 1000px;
font-family: 'Raleway', sans-serif;
`
const Header = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
`
const Choices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const IconStyles = styled.div`
margin-top: 90px;

`

const IconStylesL = styled.div`
margin-top: 90px;
margin-right:10px;

`

class BusinessType extends Component {
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
      <BusinessTypeStyle>
        <img src={Solution} alt="solution image" width="100%" />
        <Form color='green' >
          <SolutionStyles>
            <div>
              <IconStylesL>
                <Icon onClick={this.back} aria-hidden="true" className="chevron left big"></Icon>
              </IconStylesL>

            </div>
            <div className="grouped fields">
              <Header>
                <h1>What type of business are you?</h1>
              </Header>

              <div className="field">

                <Choices>
                  <div className="pretty p-icon p-plain p-tada">
                    <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Full Service Resturant" />
                    <div className="state p-primary-o">

                      <FontAwesomeIcon className='icon' icon={faUtensils} style={{ color: 'black' }} />
                      <label>Full Service Restaurant</label>
                    </div>
                  </div>

                  <div className="pretty p-icon p-plain p-tada">
                    <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Retail" />
                    <div className="state p-primary-o">

                      <FontAwesomeIcon className='icon' icon={faShoppingCart} style={{ color: 'black' }} />
                      <label>Retail</label>
                    </div>
                  </div>

                  <div className="pretty p-icon p-plain p-tada">
                    <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Service" />
                    <div className="state p-primary-o">

                      <FontAwesomeIcon className='icon' icon={faCut} style={{ color: 'black' }} />
                      <label>Service</label>
                    </div>
                  </div>

                  <div className="pretty p-icon p-plain p-tada">
                    <input onClick={this.onChange} type="radio" name="businessTypeAnswer" value="Cafe or Food Truck" />
                    <div className="state p-primary-o">

                      <FontAwesomeIcon className='icon' icon={faMugHot} style={{ color: 'black' }} />
                      <label>Cafe or Food Truck</label>
                    </div>
                  </div>

                </Choices>

              </div>
            </div>
            <div>
              <IconStyles>
                <Icon onClick={this.next} aria-hidden="true" className="chevron right big"></Icon>
              </IconStyles>

            </div>
          </SolutionStyles>
        </Form>

      </BusinessTypeStyle>

    );
  }
}

export default BusinessType;