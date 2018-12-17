import React, { Component } from 'react';
import axios from 'axios'

class Product extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        axios.get(`/api/product/`).then(res =>{
            this.setState({
                product: res.data

            })
        })
    }
    render() {
        return (
            <div>
                {this.state.product.map(product => (
                    <div key={product.id}>
                    <img src={product.image_url} alt="" />
                    <h1>{product.name}</h1>
                    </div>
                ))}
            </div>
        );
    }
}

export default Product;