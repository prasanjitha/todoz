import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import Colors from '../config/Colors';

function BorderButton({ name, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnContainer}>
            <Text style={styles.btnText}>{name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        top: 20,
        elevation: 3,
        marginBottom: 20,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.primary,
    },
});

export default BorderButton;