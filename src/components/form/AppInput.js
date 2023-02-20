import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

import Colors from '../../config/Colors';

function AppInput({ ...otherProps }) {
    return (
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            {...otherProps}
            style={styles.textInput}
        />
    );
}
const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.white,
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.primary,
        marginBottom: 10,
    }
});
export default AppInput;