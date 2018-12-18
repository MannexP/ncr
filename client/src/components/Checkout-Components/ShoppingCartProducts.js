import React, { Component } from 'react';


class ShoppingCartProducts extends Component {
state = {
  shoppingCart: []
}
  componentDidMount() {

    this.setState({shoppingCart: JSON.parse(localStorage.getItem('shopping-cart'))})
    console.log(localStorage.getItem('shopping-cart'))
  }
  render() {
    return (
      <div>
      {this.state.shoppingCart.map(product => (
          <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>price: ${product.price}</h2>
          </div>
        ))}
    </div>
    );
  }
}

export default ShoppingCartProducts;