import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import visa from '../../images/Visa-icon.png';
import mastercard from '../../images/Master-Card-icon.png';
import amex from '../../images/American-Express-icon.png';
import discover from '../../images/Discover-icon.png';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
		name: '',
    cvv: '',
    cardNumber: ''
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
				<div>Card Type*</div>
        <div>
				<img src={visa} alt="visa" height="50px"/>
				<img src={mastercard} alt="visa" height="50px"/>
				<img src={amex} alt="visa" height="50px"/>
				<img src={discover} alt="visa" height="50px"/>
        </div>
				<div>
					<form className={classes.container} style={{display: 'flex', flexDirection:'column'}} noValidate autoComplete="off">
						<div>
						<TextField required
							id="outlined-number"
							label="Card Number"
							value={this.state.cardNumber}
							onChange={this.handleChange('cardNumber')}
							type="number"
							className={classes.textField}
							InputLabelProps={{
								shrink:require
							}}
							margin="normal"
								variant="outlined"

						/>
						</div>
						<div>
						<TextField required
							id="outlined-with-placeholder"
              label="Name On Card"
              value={this.state.name}
							onChange={this.handleChange('name')}
							placeholder="Full Name"
							className={classes.textField}
							margin="normal"
							variant="outlined"
							/>
								</div> 
						<div>
							<TextField
								id="date"
								label="Expiration Date"
								type="date"
								defaultValue="2018-12-19"
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
								/>
						</div>

						<div>
							<TextField required
								id="outlined-number"
								label="CVV"
								value={this.state.cvv}
								onChange={this.handleChange('cvv')}
								type="number"
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
								margin="normal"
									variant="outlined"

							/>
							</div>
							{/* <FormControl component="fieldset">
								<FormLabel component="legend"></FormLabel>
								<RadioGroup
									aria-label="position"
									name="position"
									value={this.state.value}
									onChange={this.handleChange}
									row
								>

							<FormControlLabel
								value="end"
								control={<Radio color="primary" />}
								label="Billing address is same as shipping"
								labelPlacement="end"
									/> 
						</RadioGroup>
						</FormControl> */}
						</form>
						</div>
				</div>
	);
	}
}

OutlinedTextFields.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(OutlinedTextFields);
