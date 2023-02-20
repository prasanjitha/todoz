import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import BorderButton from '../components/BorderButton';
import CustomButton from '../components/CustomButton';
import Screen from '../components/Screen';
import Colors from '../config/Colors';

function OnBoard(props) {
    const navigation = useNavigation();
    return (
        <Screen>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Welcome to ToDoZ</Text>
                <Image resizeMode='contain' style={styles.mainImage} source={require('../assets/welcome-img.png')} />
                <TouchableOpacity
                    onPress={() => navigation.navigate('todoHome')}
                >
                    <Image
                        style={styles.todoIcon}
                        source={require('../assets/todo-list.png')} />
                </TouchableOpacity>
                <CustomButton onPress={() => navigation.navigate('signIn')} name='SignIn' />
                <BorderButton onPress={() => navigation.navigate('signUp')} name='SignUp' />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.white,
    },
    mainImage: {
        width: '60%',
        height: '40%',
        bottom: 40,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 40,
        textAlign: 'center',
    },
    todoIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        bottom: 30,

    },
});

export default OnBoard;