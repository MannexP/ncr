import React, { Component } from 'react';
import axios from 'axios';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Link} from 'react-router-dom';
import ncr1 from '../images/ncr1.png';
import ncr2 from '../images/ncr2.png';
import ncr3 from '../images/ncr3.png';
import ncr4 from '../images/ncr4.png';
import ncr5 from '../images/ncr5.png';
import dropdown from '../images/dropdown.png'


class Product extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
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
		
               <img src={ncr1} onClick={this.toggle} alt='ncr1' width='100%'/>
               <img src={ncr2} onClick={this.toggle} alt='ncr2' width='100%'/>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <img src={dropdown} alt='dropdown' width='100%'/>
            </CardBody>
          </Card>
        </Collapse>
               <img src={ncr3} alt='ncr3' width='100%'/>
               <img src={ncr4} alt='ncr4' width='100%'/>
               <img src={ncr5} alt='ncr5' width='100%'/>
            </div>
        );

    }
}

export default Product;