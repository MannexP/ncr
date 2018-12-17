import React, { Component } from 'react';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import {Button} from 'reactstrap';

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
    localStorage.setItem('cart', product.name);
  }
  render() {
    return (
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
    );
  }
}

export default SolutionProducts;