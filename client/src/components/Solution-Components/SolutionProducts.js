import React, { Component } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import {Button} from 'reactstrap';

class SolutionProducts extends Component {
  state={
    products: [],
    cart: []
  }
  componentDidMount() {
    axios.get(`/api/product/`).then(res =>{
        this.setState({ products: res.data })
    })
    if(localStorage.getItem('shopping-cart')){
      this.setState({cart: JSON.parse(localStorage.getItem('shopping-cart'))})
    }
  }

  handleClick = (product) => {
    const expandState = [...this.state.cart, product ]
    this.setState({ cart: expandState })
    localStorage.setItem('shopping-cart', JSON.stringify(expandState));
  }

  removeClick = (product) => {
    const filtered = this.state.cart.filter(pCart =>{
      return pCart.id !== product.id
    })
    this.setState({ cart: filtered })
    localStorage.setItem('shopping-cart', JSON.stringify(filtered))
  }
  render() {
    return (
      <div>
        <div>
          {this.state.products.map(product => (
              <div key={product.id}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h2>price: ${product.price}</h2>
              <Button color="success" onClick={() => this.handleClick(product)}>Add to cart</Button>
              </div>
          ))}
        </div>
        <div>
          <div className="row m-t-1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {this.state.cart.length > 0 ?
                <h4>Shopping cart</h4>
                :
                null
              }
              {this.state.cart.map(cart => (
                <div className="list-group" key={cart.product.id}>
                  <span>
                    <div className="list-group-item list-group-item-action">
                      <div>
                        <h5>{cart.product.name}</h5>
                      </div>
                      <div className="list-group-item-text row">
                        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-1'>IMAGE HERE</div>
                      </div>
                      <div className='col-xs-12 col-sm-4 col-md-4'>
                        <span>Quantity: </span><input onChange={this.handleChange} type='number' value={cart.qty}/>
                        <p>{cart.product.description}</p>
                        <p>price: ${cart.product.price}</p>
                        <p>Total: ${cart.qty*cart.product.price}</p>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                        <Button color="success" onClick={() => this.removeClick(cart.product, cart.qty)}>Remove from Cart</Button>
                      </div>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SolutionProducts;