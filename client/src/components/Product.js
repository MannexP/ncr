import React, { Component } from 'react';
import axios from 'axios';
import ncrquantum from '../images/ncrquantum.png';
import ncrscanner from '../images/ncrscanner.png';
import ncrstand from '../images/ncrstand.png';
import ncrreader from '../images/ncrreader.png';

class Product extends Component {
    state = {
        product: []
    }

    componentDidMount() {
        axios.get(`/api/product/`).then(res => {
            console.log(res.data)
            this.setState({
                product: res.data

            })
        })
    }
    render() {
        return (
            <div>
                {/* <img src={ncrquantum} alt='ncrquantum' />
                <img src={ncrscanner} alt='ncrscanner' />
                <img src={ncrstand} alt='ncrstand' />
                <img src={ncrreader} alt='ncrreader' /> */}
            
            
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