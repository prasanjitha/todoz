import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    }
});
export default Screen;