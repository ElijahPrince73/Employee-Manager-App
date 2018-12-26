import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCRUEHSSuLlyybf15O_aqcKEzKbGADi6PE',
            authDomain: 'employee-manager-37a91.firebaseapp.com',
            databaseURL: 'https://employee-manager-37a91.firebaseio.com',
            projectId: 'employee-manager-37a91',
            storageBucket: 'employee-manager-37a91.appspot.com',
            messagingSenderId: '156957979194'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
