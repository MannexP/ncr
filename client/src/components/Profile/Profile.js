import React, { Component } from 'react';
import styled from 'styled-components';



const ProfileStyles = styled.div
    `
display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;	
}
height:1000px;
.one{
    display: grid;
    justify-content: center;  
    .img{
        margin-top: 60px;
        height: 300px;
        width: 300px;
        border-radius:200px;
        background: black;
    }
}
  

  .two{

      align-content: center;

      h1{
          margin-left: 200px;
       
      }
  
    .rOrders{
        display: grid;
        grid-template-columns;


        border: solid 2px;
        height: 125px;
        width: 80%;
        margin-left: 200px;
        margin-top: 150px;

    }
  }
 

`

class Profile extends Component {
    render() {
        return (
            <ProfileStyles>
                <div className="one">
                    <div className="avatar">
                    <img src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/11753/thumb_12743681_10205360674872559_4950095949390533970_n.jpg" alt="Smiley face"></img>
          
                    </div>
                </div>
                <div className="two">
                    <div className='contatiner'>
                        <h1>Recent Orders</h1>
                        <div className="rOrders">
                            <div className="orderPlaced"></div>
                            <div className="total"></div>
                            <div className="shipping"></div>
                            <div className="orderNumber"></div>
                        </div>
                    </div>    
                </div>
                <div className="three">
                </div>
                <div className="four">
                </div>
            </ProfileStyles>
        );
    }
}

export default Profile;