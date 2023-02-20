import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import Colors from '../config/Colors';
import { deleteTodo } from '../redux/action/UserAction';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 150;

function DeleteModel({ myFunc, tData }) {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.mainTitle}>Do you want to delete this todo?</Text>
                <View style={styles.selectionContainer}>
                    <TouchableOpacity
                        style={styles.confirmContainer}
                        onPress={() => {
                            dispatch(deleteTodo(tData['id']));
                            myFunc();
                            Toast.show({
                                type: 'success',
                                text1: 'Deleted!',
                                text2: `${tData.data} 👋`
                            });
                        }}
                    >
                        <Text style={styles.confirm}>Confirm</Text>
                    </TouchableOpacity>
                    <View style={styles.spaceVerticle} />
                    <TouchableOpacity onPress={myFunc} style={styles.cancelContainer}>
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirm: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    },
    confirmContainer: {
        width: 120,
        height: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    cancel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    cancelContainer: {
        width: 120,
        height: 40,
        borderColor: Colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    selectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,

    },
    spaceVerticle: {
        paddingLeft: 10,
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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default DeleteModel;