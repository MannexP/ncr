import React, { Component } from 'react';
import topPic from './images/top-pic.png';
import sayYes from './images/sayYes.png';
import quantum from './images/quantum.png';
import features from './images/feaatures.png';
import wifi from './images/wifi.png';
import bundles from './images/bundles.png';
import styled from 'styled-components';
import bundles3 from './images/bundles3.png';
import customers from './images/customers.png';
import smarts from './images/smarts.png';
import solution from './images/solutionbuild.png';
import support from './images/support.png';
import sample from './videos/juiceStore.mp4';
import { Link } from "react-router-dom";



const VideoStyles = styled.div`
margin-left: 300px;

`
class TopPic extends Component {
    render() {
        return (
            <div>
                
                <img src={topPic} alt="top pic" width="100%"/>
                <img src={sayYes} alt="top pic" width="100%"/>
                <img src={quantum} alt="top pic" width="100%"/>
                <img src={features} alt="top pic" width="100%" />
               
                <VideoStyles>
                <video controls className='videoTag' autoPlay loop muted >
                    <source src={sample} type='video/mp4' width="100vw"/>
                </video>
                </VideoStyles>
                <img src={wifi} alt="top pic" width="100%"/>
                <img src={bundles} alt="top pic" width="100%"/>
                
                <img src={bundles3} alt="top pic" width="100%"/>
                <img src={customers} alt="top pic" width="100%"/>
                <img src={smarts} alt="top pic" width="100%"/>
                <Link to='/build-a-solution'><img src={solution} alt="top pic" width="100%"/></Link>
                <img src={support} alt="top pic" width="100%"/>
                
            </div>
        );
    }
}

export default TopPic;