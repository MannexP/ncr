import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import Solution from './images/solutionImage.png';
import styled from 'styled-components';
import logo from '../../images/Icon.png';
import { Icon } from 'semantic-ui-react';

library.add(faTimesCircle)
library.add(faShoppingCart)
library.add(faPlusCircle)
library.add(faPlusSquare)
library.add(faMinusSquare)

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
  .buttons{
    display: flex;
    flex-direction: row;
  }
`
class SolutionProducts extends Component {
	state={
		products: [],
		cart: [],
		qty: [],
		grandTotal: 0
	}
	componentDidMount() {
		axios.get(`/api/product/`).then(res =>{
			this.setState({ products: res.data })
		})
		if(localStorage.getItem('shopping-cart')){
      const localCart = JSON.parse(localStorage.getItem('shopping-cart'))
      const localQty = JSON.parse(localStorage.getItem('shopping-cart-qty'))
			this.setState({cart: localCart, qty: localQty})
			localCart.map(product => {
        const qty = localQty.filter(qty => {return qty.product === product.id})
				this.state.grandTotal += (parseFloat(product.price) * parseInt(qty[0].qty))
			})
		}

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

	handleClick = (product) => {
    // spread cart
    const expandState = [...this.state.cart]
    // spread qty
    const expandQty = [...this.state.qty]
    //find single product
    const singleItem = expandState.filter(single => {
      return single.id === product.id
    })
    // find single qty
    const singleItemQty = expandQty.filter(single => {
      return single.product === product.id
    })
    const filteredItemsQty = expandQty.filter(single => {
      return single.product !== product.id
    })

    if(singleItem.length > 0){
      singleItemQty[0].qty++
      const newQty = filteredItemsQty.concat(singleItemQty)
      this.setState({qty: newQty})
      localStorage.setItem('shopping-cart-qty', JSON.stringify(newQty));
    } else {
      const newItem = [...this.state.cart, product]
      const expandQty = [...this.state.qty, {product: product.id, qty: 1} ]
      this.setState({ 
        cart: newItem, 
        grandTotal: this.state.grandTotal + parseFloat(product.price),
        qty: expandQty
      })
      localStorage.setItem('shopping-cart', JSON.stringify(newItem));
      localStorage.setItem('shopping-cart-qty', JSON.stringify(expandQty));
    }
	}

	removeClick = (product) => {
		const filtered = this.state.cart.filter(pCart =>{
			return pCart.id !== product.id
    })
    const expandQty = [...this.state.qty]
    const filteredItemsQty = expandQty.filter(single => {
      return single.product !== product.id
    })
		let newTotal = 0
		filtered.forEach(product => {
			return newTotal += parseFloat(product.price)
		})
		this.setState({ cart: filtered, qty: filteredItemsQty, grandTotal: newTotal })
    localStorage.setItem('shopping-cart', JSON.stringify(filtered))
    localStorage.setItem('shopping-cart-qty', JSON.stringify(filteredItemsQty))
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

								<CartStyle classname="list-group-item">
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
									</CartStyle>
								</div>
								:
								null
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SolutionProducts;
