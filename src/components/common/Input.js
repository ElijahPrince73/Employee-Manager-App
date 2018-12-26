import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ labelText, value, placeholder, onChangeText, secureTextEntry }) => {
    const { label, input, container } = styles;
    return (
        <View style={container}>
            <Text style={label}>{labelText}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={input}
                autoCorrect={false}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
     },
    label: {
        fontSize: 18,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
