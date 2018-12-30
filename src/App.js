import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './router';

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
        const store = createStore(
            reducers, {}, applyMiddleware(ReduxThunk)
        );
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
