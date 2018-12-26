import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { 
    Button, 
    Card, 
    CardSection, 
    Input, 
    Spinner 
} from './common';

import { 
    emailChanged, 
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component {
    state = {
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser(email, password);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return (<Spinner size='large' />);
        }
        
        return (
            <Button 
                cta='Login in' 
                onPress={this.onButtonPress.bind(this)} 
            />
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextMessage}> 
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        labelText="Email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        labelText="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextMessage: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 10,
        marginBottom: 10
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    loginUser
})(LoginForm);
