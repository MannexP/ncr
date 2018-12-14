import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


class ProductTypes extends Component {
    state = {
        product: {},
        proudcttypes: []
    }

    componentDidMount() {
        axios.get('/api/product').then((res) => {
            console.log(res.data)
            this.setState({ products: res.data })
        })

    }

    render() {
        return (
            <div>
                <h1>All Product</h1>
                {this.state.products.map(product => (
                    <div key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ProductTypes;