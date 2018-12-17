import React, { Component } from 'react';


class ShoppingCartProducts extends Component {
state = {
  shoppingCart: []
}
  componentDidMount() {
    this.setState({shoppingCart: [localStorage.getItem('cart')]})
  }
  render() {
    return (
      <div>
      {this.state.shoppingCart.map(product => (
          <div key={product}>
          {product}
          </div>
      ))}
    </div>
    );
  }
}

export default ShoppingCartProducts;