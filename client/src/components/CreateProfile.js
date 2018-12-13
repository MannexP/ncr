import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        width: 200,
    },
});



class OutlinedTextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
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
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
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

// const FormStyles = styled.div`
// display: flex;
// justify-content: center
// max-width: 300px;
// margin: 10px;
// padding: 10px;
// background: #f4f7f8;
// border-radius: 8px;
// margin-left: 550px;
// margin-top: 50px;
// // border-style: groove;
// `

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