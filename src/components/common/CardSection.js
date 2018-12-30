import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        // Allows for us to use not the styles that we have but also any new ones we made
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1, 
        padding: 5,
        backgroundColor: '#fff',
        justContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        postition: 'relative'
    }
};

export { CardSection };
