import React from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

function CustomModel({ children, ...otherProps }) {
    return (
        <Modal  {...otherProps} transparent>
            <View style={style.modal}>
                {children}
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});
export default CustomModel;