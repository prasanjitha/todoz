import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
}
    from 'react-native';

function TaskCard(props) {
    return (
        <View>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <View style={styles.itemText}>

                        <Text >{props.text}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', right: 20 }}>
                    <TouchableOpacity onPress={props.updateModel}>
                        <Image style={styles.icon} source={require('../assets/edit.png')} />
                    </TouchableOpacity>
                    <View style={styles.space} />
                    <TouchableOpacity onPress={props.openModel}>
                        <Image style={styles.icon} source={require('../assets/delete.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    space: {
        marginRight: 15,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },

});

export default TaskCard;