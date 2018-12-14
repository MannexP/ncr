import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import logo from '../images/Icon.png'



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 800,
    },
});




const FormStyles = styled.div`
display: flex;
justify-content: center
max-width: 300px;
margin: 10px;
padding: 10px;

border-radius: 8px;
margin-left: 550px;
margin-top: 50px;
margin-bottom: 50px;

.details {
    h4{
        font-weight: lighter;
        display:flex;
    }



`
const ButtonStyles = styled.div`
  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 9px;
    font-weight: bold;
}
`


class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: '',
        currency: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <FormStyles>
                    <form className={classes.container} noValidate autoComplete="off">
                        <div className="details">
                            <h1>Create Profile</h1>
                            <div>
                                <div><img src={logo} alt="icon" height="20px"/><h4>Save your info for faster check-outs</h4></div>
                                <div><img src={logo} alt="icon" height="20px"/><h4>Easily track your orders</h4></div>
                                <div><img src={logo} alt="icon" height="20px"/><h4>Product suggestions tailored to you</h4></div>
                            </div> 
                        </div>
                        <TextField
                            className={classes.textField}
                            label="Img"
                            variant="outlined"
                            margin="normal"
                            id="outlined-name"
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="First Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <ButtonStyles>
                            <button type="submit">Create Profile</button>
                        </ButtonStyles>
                    </form>
                </FormStyles>
            </div>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);




// import React, { Component } from 'react';
// import styled from 'styled-components'



// const ButtonStyles = styled.div`
//   button {
//     background-color: #4CAF50; /* Green */
//     border: none;
//     color: white;
//     padding: 15px 20px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
//     border-radius: 9px;
//     font-weight: bold;
// }
// `

// class CreateProfile extends Component {
//     render() {
//         return (
//             <div>
//                 <FormStyles>
//                     <form onSubmit={this.handleSubmit}>
//                         <h1>Create Profile</h1>
//                         <div>
//                             <label htmlFor="image"></label>
//                             <input type="text" name="name" placeholder="Image" />
//                         </div>
//                         <div>
//                             <label htmlFor="firstName"></label>
//                             <input  type="text" name="firstName" placeholder="First Name" />
//                         </div>
//                         <div>
//                             <label htmlFor="lastName"></label>
//                             <input type="text" name="lastName" placeholder="Last Name" />
//                         </div>
//                         <div>
//                             <label htmlFor="phone"></label>
//                             <input type="text" name="phone" placeholder="Phone" />
//                         </div>

//                         <ButtonStyles>
//                             <button type="submit">Create Profile</button>
//                         </ButtonStyles>
//                     </form>
//                 </FormStyles>
//             </div>
//         );
//     }
// }

// export default CreateProfile;