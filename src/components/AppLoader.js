import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

const AppLoader = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <Lottie source={require('../assets/98195-loader.json')} autoPlay loop />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1


    }
});

export default AppLoader;