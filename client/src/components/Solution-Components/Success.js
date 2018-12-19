import React, { Component } from 'react';
import styled from 'styled-components';

const Success = styled.div`
font-family: 'Raleway', sans-serif;
`
class Success extends Component{
    render(){
        return(
            <div>
                <Success>
                    <h1 className="ui centered">Details Successfully Saved</h1>
                    </Success>
            </div>
        )
    }
}

export default Success;