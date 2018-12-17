import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import logo from '../images/Icon.png'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


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
justify-content: center;    
max-width: 300px;
margin: 10px;
padding-right: 50px;
border-radius: 8px;
margin-left: 400px;
margin-top: 50px;
margin-bottom: 100px;
border-right: groove;
.details {
    h4{
        font-weight: lighter;
        display:flex;
    }

const ButtonStyles = styled.div`
button {
    background-color: #4CAF50;
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
.check{
    display:flex;
}
`
const Checkout = styled.div`
.guestCheck{
margin-left:250px;
margin-top:250px;
width:200px;
display: flex;
justify-content: center;
flex-direction: column;
h3{
    align-content: center;
    
}
}
`

const Profile = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
`


class OutlinedTextFields extends React.Component {
    state = {
        profiles: [],
        newProfile: {
            image_url: '',
            first_name: '',
            last_name: '',
            phone: '',
        }
    };

    handleChange = (e) => {
        const profile = {...this.state.newProfile}
        profile[e.target.name] = e.target.value
        this.setState({
            newProfile: profile
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("BEFORE POST", this.state.newProfile)
        axios.post('/api/profile/', this.state.newProfile).then(res => {
            console.log("RES", res.data)
            this.props.history.push(`/profile/${res.data.id}`)
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <Profile>
                <FormStyles>
                    <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                        <div className="details">
                            <h1>Create Profile</h1>
                            <div>
                                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>Save your info for faster check-outs</h4></div>
                                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>Easily track your orders</h4></div>
                                <div className="check"><img src={logo} alt="icon" height="20px" /><h4>Product suggestions tailored to you</h4></div>
                            </div>
                        </div>
                        <TextField
                        name="image_url"
                            onChange={this.handleChange}
                            className={classes.textField}
                            label="Img"
                            variant="outlined"
                            margin="normal"
                            id="outlined-name"
                        />
                        <TextField
                        name="first_name"
                            onChange={this.handleChange}
                            id="outlined-uncontrolled"
                            label="First Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                        name="last_name"
                        onChange={this.handleChange}
                            required
                            id="outlined-required"
                            label="Last Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                        name="phone"
                        onChange={this.handleChange}
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
                <Checkout>
                    <div className="guestCheck">
                        <div className="or">
                            <h3>OR</h3>
                        </div>
                        <ButtonStyles>
                            <button type="submit">Checkout as Guest</button>
                        </ButtonStyles>
                    </div>
                </Checkout>
            </Profile>



        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);



