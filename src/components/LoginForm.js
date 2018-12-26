import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
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
        if (this.state.loading) {
            return (<Spinner size='small' />);
        }
        return (
            <Button 
                cta='Login in' 
                onPress={this.onButtonPress.bind(this)} 
            />
        );
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

                <Text style={styles.errorTextMessage}>{this.state.error}</Text>

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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    loginUser
})(LoginForm);
