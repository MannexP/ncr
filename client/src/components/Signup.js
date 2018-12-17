import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Button } from 'semantic-ui-react';
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
}
h3{
    align-content: center;
    
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
const Profile = styled.div`
display:grid;
grid-template-columns:1fr 1fr;

`
class Signup extends Component {
	state = {
		username: '',
		email: '',
    password: '',
    checkout: false
  }
  handleCheckout = () => {
    localStorage.setItem('checkout', true);
    this.setState({checkout: true})
    this.props.history.push(`/checkout`)
  }


	handleSignup = (e) => {
		e.preventDefault();
		const payload ={
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		}
		axios.post('/api/users/', payload)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				this.setState({
					logged_in: true,
					username: res.data.username
				})
				this.props.history.push(`/products`)
			})
	}

	handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(prevstate => {
			const newState = { ...prevstate };
			newState[name] = value;
			return newState;
		});
	};

	render() {
		const { classes } = this.props;
		return (
      <div>
			<FormStyles>
			<form onSubmit={e => this.handleSignup(e)}>
				<h4>Sign Up</h4>

				<TextField
					id="outlined-uncontrolled"
					label="First Name"
					className={classes.textField}
					margin="normal"
					variant="outlined"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
						/>

							<TextField
					id="outlined-uncontrolled"
					label="Email"
					className={classes.textField}
					margin="normal"
					variant="outlined"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
						/>

				<TextField
					id="outlined-uncontrolled"
					label="Password"
					className={classes.textField}
					margin="normal"
					variant="outlined"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
					<ButtonStyles>
					<button type="submit">Sign Up</button>
				</ButtonStyles>
			</form>
			</FormStyles>
				<Checkout>
					<div className="guestCheck">
						<div className="or">
							<h3>OR</h3>
						</div>
						<ButtonStyles>
							<button onClick={this.handleCheckout} type="submit">Checkout as Guest</button>
						</ButtonStyles>
					</div>
					</Checkout>
          </div>
		);
	}
}
Signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
