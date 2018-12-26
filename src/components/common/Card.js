import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    // Allows for this component to dynamicallly render other components
    // Based of what is inside of the Card component 
    // EX. <Card>{Component to render} </Card>
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottom: 0,
        shadow: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40,

    }
};

export { Card };
