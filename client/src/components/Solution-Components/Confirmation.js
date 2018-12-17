import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        this.props.history.push('/build-solution')

    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { customerAnswer, businessRunAnswer, businessTypeAnswer, featureAnswer, multiFeatureAnswer }} = this.props;
        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List/>
                        <List.Content>Existing Customer? {customerAnswer}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>What kind of business do you run? {businessRunAnswer}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>What type of business are you? {businessTypeAnswer}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Would you like any of these features? {featureAnswer}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>Which of these features would you like? {multiFeatureAnswer}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>View Suggestions</Button>
            </div>
        )
    }
}

export default Confirmation;