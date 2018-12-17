import React, { Component } from 'react';
import axios from 'axios'

class SolutionProducts extends Component {
  state={
    products: []
  }
  componentDidMount() {
    axios.get(`/api/product/`).then(res =>{
        this.setState({ products: res.data })
    })
  }

  handleClick = (product) => {
    console.log(product)
  }
  render() {
    return (
      <div>
        {this.state.products.map(product => (
            <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>price: ${product.price}</h2>
            <button onClick={() => this.handleClick(product)}>Add to cart</button>
            </div>
        ))}
      </div>
    );
  }
}

export default SolutionProducts;