import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, cta }) => {
    const { btn, text } = styles;

    return (
        <TouchableOpacity style={btn} onPress={onPress}>
            <Text style={text}>{cta}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    btn: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button };
