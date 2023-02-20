import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

import Colors from '../../config/Colors';

function ErrorText({ errors, touched }) {
    if (!touched) return;
    return (
        <Text style={styles.errorText}>
            {errors}
        </Text>
    );
}
const styles = StyleSheet.create({
    errorText: {
        color: Colors.red,
        paddingLeft: 0,
        fontWeight: '500',
        alignSelf: 'flex-start',
        bottom: 5,
    }
});

export default ErrorText;