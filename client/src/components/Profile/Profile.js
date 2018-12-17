import React, { Component } from 'react';
import styled from 'styled-components';



const ProfileStyles = styled.div`
display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;	

.one{
    display: grid;
    justify-content: center;  
  .avatar{
        img{
                margin: 0 auto;
                height: 200px;
                width: 200px;
                margin-top: 20px;
                border-radius:50%;
        }   
   }
}  
`

const FlexContainer = styled.div`
        display: grid;
        grid-template-columns: 30% 20% 20% 30%;    
        border: solid 2px;
        height: 125px;
        width: 80%;
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
                    <div className='container'>
                        <h1>Recent Orders</h1>
                        <FlexContainer>
                            <div className="orderPlaced">Order Placed</div>
                            <div className="total">Total</div>
                            <div className="shipping">Shipping To</div>
                            <div className="orderNumber">Order Number</div>
                        </FlexContainer>
                    </div>    
                </div>
                <div className="three">
                    {/* <img src="https://img.icons8.com/wired/2x/settings.png" alt="My Orders"></img> */}
                </div>
                <div className="four">
                </div>
                <div className="five">
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtr0dXjeDRkvXQzOUn2M1tWU1AD4AVQDd38ws1XLV6vBJQ6UOjGg" alt="settings"></img> */}
                </div>
            </ProfileStyles>
        );
    }
}

export default Profile;