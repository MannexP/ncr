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
        {this.state.cart.map(product => (
            <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>price: ${product.price}</h2>
            <Button color="success" onClick={() => this.removeClick(product)}>Remove from Cart</Button>
            </div>
        ))}
      </div>
    </div>
    );
  }
}

export default SolutionProducts;