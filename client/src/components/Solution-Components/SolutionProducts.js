import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Solution from './images/solutionImage.png';
import styled from 'styled-components';
import logo from '../../images/Icon.png';
import { Icon } from 'semantic-ui-react';

library.add(faTimesCircle)
library.add(faShoppingCart)
library.add(faPlusCircle)

const Straight = styled.div`
display: flex;
justify-content: space-around;

margin-top: 20px;
.check{
    display:flex;
}
`
const CartStyle = styled.div`

    display:flex;

`
class SolutionProducts extends Component {
  state={
    products: [],
    cart: [],
    grandTotal: 0
  }
  componentDidMount() {
    axios.get(`/api/product/`).then(res =>{
        this.setState({ products: res.data })
    })
    if(localStorage.getItem('shopping-cart')){
      const localCart = JSON.parse(localStorage.getItem('shopping-cart'))
      this.setState({cart: localCart})
      localCart.map(product => {
        this.state.grandTotal += parseFloat(product.price)
      })
    }

  }

  handleClick = (product) => {
    const expandState = [...this.state.cart, product ]
    this.setState({ cart: expandState, grandTotal: this.state.grandTotal + parseFloat(product.price)})
    localStorage.setItem('shopping-cart', JSON.stringify(expandState));
  }

  removeClick = (product) => {
    const filtered = this.state.cart.filter(pCart =>{
      return pCart.id !== product.id
    })
    let newTotal = 0
    filtered.forEach(product => {
      return newTotal += parseFloat(product.price)
    })
    this.setState({ cart: filtered, grandTotal: newTotal  })
    localStorage.setItem('shopping-cart', JSON.stringify(filtered))
  }
  render() {
    return (
      <div>
        <img src={Solution} alt="solution image" width="100%" />
        <Straight>
          
        
          {this.state.products.map(product => (
            <div key={product.id}>
              <img src={product.image_url} alt="bundles" height="200px" width="200px" style={{borderRadius: '25px'}}/>
              <h2>{product.name}</h2>
          
                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>NCR Silver Commerce</h4></div>
                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>NCR Console Core</h4></div>
                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>ipad Air</h4></div>
                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>Silver Concierge</h4></div>
                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>NCR Silver Quantum</h4></div>
               <h2>24/7 Support</h2>
               <h3> <Icon onClick={this.next} aria-hidden="true" className="chevron right"></Icon> Product Details</h3>
             
              <bold><h1>price: ${product.price}</h1></bold>

              <Button color="success" onClick={() => this.handleClick(product)} ><FontAwesomeIcon className= 'icon' icon={faPlusCircle}/> Add to cart</Button>
              </div>
          ))}
        </Straight>
        <div>
          <div className="row m-t-1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {this.state.cart.length > 0 ?
                <div>
                  <hr />
                  <h4>Shopping cart</h4>
                  <Link to='/checkout'><Button color="primary"><FontAwesomeIcon className= 'icon' icon={faShoppingCart}/> Checkout: Grand Total ${this.state.grandTotal}</Button></Link>
                  <span></span>
                </div>
                :
                null
              }
              <CartStyle classname="list-group-item">
              {this.state.cart.map(product => (
                <div className="list-group" key={product.id}>
                  <span>
                    <div className="list-group-item list-group-item-action">
                      <div>
                        <h5>{product.name}</h5>
                      </div>
                      <div className="list-group-item-text row">
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-1'><img src={product.image_url} alt="bundles" height="100px" style={{borderRadius: '25px'}}/></div>
                      </div>
                      <div className='col-xs-12 col-sm-4 col-md-4'>
                       
                        <p>price: ${product.price}</p>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                        <Button color="danger" onClick={() => this.removeClick(product)}><FontAwesomeIcon className= 'icon' icon={faTimesCircle}/> Remove</Button>
                      </div>
                    </div>
                  </span>
                </div>
                ))}
                </CartStyle>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolutionProducts;