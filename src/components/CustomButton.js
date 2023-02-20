import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import Colors from '../config/Colors';

function CustomButton({ name, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.mainContainer}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.white,
    }
});

export default CustomButton;