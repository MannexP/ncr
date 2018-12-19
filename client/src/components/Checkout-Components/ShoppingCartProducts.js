import React, { Component } from 'react';
import {Button} from 'reactstrap';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faPlusSquare)
library.add(faMinusSquare)
const ShoppingCartStyle = styled.div`
	.thumbnail{
		height:100px;
	}
		.flexed2{
			display: flex;
			justify-content: space-evenly;
		}
`

class ShoppingCartProducts extends Component {
state = {
	cart: [],
	qty: [],
	grandTotal: 0
}
	componentDidMount() {
		if(localStorage.getItem('shopping-cart')){
			const localCart = JSON.parse(localStorage.getItem('shopping-cart'))
			const localQty = JSON.parse(localStorage.getItem('shopping-cart-qty'))
		this.setState({cart: localCart, qty: localQty})
		localCart.map(product => {
			const qty = localQty.filter(qty => {return qty.product === product.id})
			this.state.grandTotal += (parseFloat(product.price) * parseInt(qty[0].qty))
		})
	  } else{ this.props.history.push('/solution-products') }
	}
	removeClick = (product) => {
		const filtered = this.state.cart.filter(pCart =>{
			return pCart.id !== product.id
		})
		let newTotal = 0
		filtered.forEach(product => {
			return newTotal += parseFloat(product.price)
    })
    const expandQty = [...this.state.qty]
    const filteredItemsQty = expandQty.filter(single => {
      return single.product !== product.id
    })
		this.setState({ cart: filtered, qty: filteredItemsQty, grandTotal: newTotal })
		if(filtered.length === 0){
			this.props.history.push('/solution-products')
		}
    localStorage.setItem('shopping-cart', JSON.stringify(filtered))
    localStorage.setItem('shopping-cart-qty', JSON.stringify(filteredItemsQty))
  }
  upChange = (product) => {
    // spread qty
    const expandQty = [...this.state.qty]
    // find single qty
    const singleItemQty = expandQty.filter(single => {
      return single.product === product.id
    })
    const filteredItemsQty = expandQty.filter(single => {
      return single.product !== product.id
    })
    this.state.grandTotal -= (parseFloat(product.price) * parseInt(singleItemQty[0].qty))
    singleItemQty[0].qty++
    this.state.grandTotal += (parseFloat(product.price) * parseInt(singleItemQty[0].qty))
    const newQty = filteredItemsQty.concat(singleItemQty)
    this.setState({qty: newQty})
    localStorage.setItem('shopping-cart-qty', JSON.stringify(newQty));
  }
  
  downChange = (product) => {
    // spread qty
    const expandQty = [...this.state.qty]
    // find single qty
    const singleItemQty = expandQty.filter(single => {
      return single.product === product.id
    })
    const filteredItemsQty = expandQty.filter(single => {
      return single.product !== product.id
    })
    this.state.grandTotal -= (parseFloat(product.price) * parseInt(singleItemQty[0].qty))
    singleItemQty[0].qty--
    this.state.grandTotal += (parseFloat(product.price) * parseInt(singleItemQty[0].qty))
    const newQty = filteredItemsQty.concat(singleItemQty)
    this.setState({qty: newQty})
    localStorage.setItem('shopping-cart-qty', JSON.stringify(newQty));
  }
	render() {
		return (
			<ShoppingCartStyle>
			{this.state.cart.map(product => {
				const productQty = this.state.qty.filter(qty => {
					return product.id === qty.product
				})
				return <div className="list-group" key={product.id}>
					<span>
						<div className="list-group-item list-group-item-action">
							<div>
								<h5>{product.name}</h5>
							</div>
							<div className="list-group-item-text row">
								<div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-1'><img src={product.image_url} alt="bundles" height="100px" style={{borderRadius: '25px'}}/></div>
							</div>
							<div className='col-xs-12 col-sm-4 col-md-4'>
								Qty: 
								<input type='number' style={{display: 'inline', width: 70+'px'}} name='qty' value={productQty[0].qty} />
									<Button style={{display: 'inline'}} onClick={() => this.downChange(product)}><FontAwesomeIcon className= 'icon' icon={faMinusSquare}/></Button>
									<Button style={{display: 'inline'}} color="primary" onClick={() => this.upChange(product)}><FontAwesomeIcon className= 'icon' icon={faPlusSquare}/></Button>
								<p>Product Total: ${product.price * productQty[0].qty}</p>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
								<Button color="danger" onClick={() => this.removeClick(product)}><FontAwesomeIcon className= 'icon' icon={faTimesCircle}/> Remove</Button>
							</div>
						</div>
					</span>
				</div>
        })}
        <div>
        <Button color="primary">Checkout: Grand Total ${this.state.grandTotal}</Button>
        </div>
		</ShoppingCartStyle>
		);
	}
}

export default ShoppingCartProducts;
