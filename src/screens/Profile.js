import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

import Screen from '../components/Screen';
import Colors from '../config/Colors';
import { auth } from '../config/firebase';

function Profile(props) {

    const { todos } = useSelector(state => state.todoReducer);

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.mainScreen}>
                    <View style={styles.profileContainer}>
                        <View style={styles.proTextContainer}>
                            <Text style={styles.profileTextHead}>Email :</Text>
                            <Text style={styles.proText}>{auth.currentUser === null ? 'Unautherized user' : auth.currentUser.email}</Text>
                        </View>
                    </View>
                    <View style={styles.todoMainContainer}>
                        <Text style={styles.totoTitle}>My Todos</Text>
                        {todos.length !== 0 ?
                            todos.map((item, index) => <View key={index} style={styles.totoItem}>
                                <Text key={index} style={styles.totoSpace} >{item}</Text>
                            </View>)
                            : <Text style={styles.addTodoText}>Hurry up add your todos 👋</Text>}
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
const styles = StyleSheet.create({
    addTodoText: {
        color: Colors.black,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    mainScreen: {
        padding: 20,
    },
    profileContainer: {
        width: '100%',
        padding: 20,
        borderRadius: 25,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 40,
        elevation: 5,
    },
    proTextContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    proText: {
        fontWeight: '700',
        paddingRight: 20,
        fontSize: 18,
    },
    profileTextHead: {
        fontWeight: 'bold',
        paddingRight: 20,
        fontSize: 18,
    },
    todoMainContainer: {
        top: 20,
        width: '100%',
        padding: 20,
        borderRadius: 25,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'flex-start',
        elevation: 5,
        marginBottom: 20
    },
    totoTitle: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'center',
    },
    totoItem: {
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.primary,
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    totoSpace: {
        padding: 10,
        alignSelf: 'flex-start'
    },
});

export default Profile;