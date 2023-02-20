import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Colors from '../config/Colors';

function AddTodoButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.lightGray,
        borderWidth: 1,
    },
    addText: {
        fontWeight: 'bold',
        fontSize: 24,
    }
});

export default AddTodoButton;