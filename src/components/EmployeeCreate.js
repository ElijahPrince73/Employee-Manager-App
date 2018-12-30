import React, { Component } from 'react';

import {
    Button,
    Card,
    CardSection,
    Input,
} from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        labelText="Name"
                        placeholder='Jane'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        labelText="Phone Number"
                        placeholder='123-123-1234'
                    />
                </CardSection>

                <CardSection>
                    <Button cta='create' />
                </CardSection>

            </Card>
        );
    }
}

export default EmployeeCreate;
