import React, { Component } from 'react';
import topPic from './images/top-pic.png';
import sayYes from './images/sayYes.png';
import quantum from './images/quantum.png';
import features from './images/feaatures.png';
import wifi from './images/wifi.png';
import bundles from './images/bundles.png';

import bundles3 from './images/bundles3.png';
import customers from './images/customers.png';
import smarts from './images/smarts.png';
import solution from './images/solutionbuild.png';
import support from './images/support.png';
import sample from './videos/juiceStore.mp4';
import { Link } from "react-router-dom";

class TopPic extends Component {
    render() {
        return (
            <div>
                
                <img src={topPic} alt="top pic" width="100%"/>
                <img src={sayYes} alt="top pic" width="100%"/>
                <img src={quantum} alt="top pic" width="100%"/>
                <img src={features} alt="top pic" width="100%" />
               
                <video controls className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' width="400"/>
                </video>
      
                <img src={wifi} alt="top pic" width="100%"/>
                <img src={bundles} alt="top pic" />
                
                <img src={bundles3} alt="top pic"/>
                <img src={customers} alt="top pic"/>
                <img src={smarts} alt="top pic"/>
                <Link to='/build-a-solution'><img src={solution} alt="top pic" width="100%"/></Link>
                <img src={support} alt="top pic" width="100%"/>
                
            </div>
        );
    }
}

export default TopPic;