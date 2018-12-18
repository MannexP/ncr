import React, { Component } from 'react';
import {Button} from 'reactstrap';
import styled from "styled-components";

const ShoppingCartStyle = styled.div`
	.thumbnail{
		height:100px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 20px 10px; 
	}
  .flexed2{
    display: flex;
    justify-content: space-evenly;
  }
`

class ShoppingCartProducts extends Component {
state = {
  cart: [],
  grandTotal: 0
}
  componentDidMount() {
    this.setState({cart: JSON.parse(localStorage.getItem('shopping-cart'))})
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
    if(filtered.length === 0){
      this.props.history.push('/solution-products')
    }
    localStorage.setItem('shopping-cart', JSON.stringify(filtered))
  }
  render() {
    return (
      <div>
      {this.state.cart.map(product => (
          <div className="list-group" key={product.id}>
          <span>
            <div className="list-group-item list-group-item-action">
              <div>
                <h5>{product.name}</h5>
              </div>
              <div className="list-group-item-text row">
                <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-1'>IMAGE HERE</div>
              </div>
              <div className='col-xs-12 col-sm-4 col-md-4'>
                <p>{product.description}</p>
                <p>price: ${product.price}</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
                <Button color="danger" onClick={() => this.removeClick(product)}>Remove from Cart</Button>
              </div>
            </div>
          </span>
        </div>
        ))}
    </div>
    );
  }
}

export default ShoppingCartProducts;