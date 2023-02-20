import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';

import Colors from '../config/Colors';
import { updateTodo } from '../redux/action/UserAction';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 250;

function UpdateModel({ myFunc, tData }) {
    const [itemData, setitemData] = useState(tData.data);
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View
                style={styles.modal}
            >
                <Text style={styles.mainTitle}>Update your todo</Text>
                <View style={{ paddingTop: 30 }} />
                <TextInput
                    autoCorrect={false}
                    onChangeText={text => setitemData(text)}
                    placeholder='Enter Todo'
                    value={itemData}
                    style={styles.input}
                />
                <View style={styles.selectionContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(updateTodo({ id: tData.id, data: itemData }));
                            Toast.show({
                                type: 'success',
                                text1: 'Updated!',
                                text2: `${itemData} 👋`
                            });
                            myFunc();
                        }}
                        style={styles.updateText}
                    >
                        <Text style={styles.update}>Update</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceVerticle} />
                    <TouchableOpacity
                        onPress={myFunc}
                        style={styles.cancelText}
                    >
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity >
    );
}
const styles = StyleSheet.create({
    cancel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,

    },
    cancelText: {
        width: 120,
        height: 40,
        borderColor: Colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: '100%',
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
        paddingLeft: 20,
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    modal: {
        height: HEIGHT,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    selectionContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spaceVerticle: {
        paddingLeft: 10,
    },
    update: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    },
    updateText: {
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default UpdateModel;