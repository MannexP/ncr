
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import QuickPay from './Checkout-Components/QuickPay';
import ContactInfoForm from './Checkout-Components/ContactInfoForm';
import ShippingForm from './Checkout-Components/ShippingForm';
import BillingForm from './Checkout-Components/BillingForm';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import axios from 'axios';
import ShoppingCartProducts from './Checkout-Components/ShoppingCartProducts';


const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  cssRoot: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }
});

function getSteps() {
  return ['Contact Information', 'Shipping Information', 'Payment and Billing'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ContactInfoForm />;
    case 1:
      return <ShippingForm />;
    case 2:
      return <BillingForm />;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    logged_in: localStorage.getItem('token') ? true : false,
    checkout: localStorage.getItem('checkout') ? true : false
  };
  componentDidMount() {
    if (this.state.logged_in || this.state.checkout) {
      axios.get('/api/current_user/')
        .then(res => {
          console.log(res)
          this.setState({ username: res.data.username })
        })
    } else {
      this.props.history.push(`/signup`)
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      
      <div className={classes.root}>
        <div className="flexed">
        <div style={{borderRight: 1+'px solid lightgray', paddingRight: 20 +'px', marginTop: 1+'%'}}>
          <QuickPay />
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                          className={classNames(classes.button, classes.cssRoot)}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
          <ShoppingCartProducts />
        </div>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);