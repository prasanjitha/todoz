import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Colors from '../config/Colors';

function TouchableImage({ onPress, imgPath }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Image
                style={styles.image}
                source={imgPath}
            />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderColor: Colors.gray,
        borderWidth: 2,
    },

});

export default TouchableImage;