import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
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
      width: 500,
    },
  });
   
  class OutlinedTextFields extends React.Component {
    state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      states: 'EUR',
     
    };
  
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
   
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <div>
        <div>
        <TextField required
            id="outlined-with-placeholder"
            label="Company Name"
            placeholder="Company Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
           </div> 
  
          <div>
          <TextField required
          id="outlined-textarea"
          label="Address Line 1"
          placeholder="Address"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
 
      </div>
      
      <div>
        <TextField
            id="outlined-with-placeholder"
            label="Unit/Suite"
            placeholder="Unit/Suite"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
            </div> 
            
           <div>
        <TextField required
            id="outlined-with-placeholder"
                label="City"
            placeholder="City"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
      </div> 
      <div>
        <TextField required
            id="outlined-with-placeholder"
            label="State"
            placeholder="State"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
      </div> 
            
       <div>
          <TextField
            id="outlined-number"
            label="Zip"
            value={this.state.age}
            onChange={this.handleChange('age')}
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
        <RadioGroup
          aria-label="position"
          name="position"
          value={this.state.value}
          onChange={this.handleChange}
          row
        >
        <h1><FormLabel component="legend">Select shipping method:</FormLabel></h1>
        <div>
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="FedEx Standard: $7.00 (5-7 business days)"
            labelPlacement="end"
          /> 
        </div>
          <FormControlLabel
            value="end"
            control={<Radio color="primary" />}
            label="FedEx Standard: $12.00 (2-3 business days)"
            labelPlacement="end"
          /> 
        </RadioGroup>
      </FormControl> */}
          
       
         </div>
        </form>
      );
    }
  }
  
  OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(OutlinedTextFields);