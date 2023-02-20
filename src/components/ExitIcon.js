import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { auth } from '../config/firebase';

function ExitIcon(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={async () => {
            try {
                await auth.signOut();
                navigation.navigate('signIn');

            } catch (e) {
                console.log(e);
            }
        }}>
            <Image style={styles.image} source={require('../assets/exit.png')} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 25,
        height: 25,
    },
});

export default ExitIcon;