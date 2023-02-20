import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import TaskCard from '../components/TaskCard';
import UpdateModel from '../components/UpdateModel';
import { createTodo } from '../redux/action/UserAction';
import DeleteModel from '../components/DeleteModel';
import TouchableImage from '../components/TouchableImage';
import AddTodoButton from '../components/AddTodoButton';
import CustomModel from '../components/CustomModel';
import Screen from '../components/Screen';

function TodoHome(props) {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todoReducer);
    const [visible, setVisible] = useState(false);
    const [updateVisibleModal, setUpdateVisibleModal] = useState(false);
    const [tData, setTData] = useState();
    const [task, setTask] = useState();
    const navigation = useNavigation();

    return (
        <Screen>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1
                    }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}

                >
                    <View style={styles.tasksWrapper}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.sectionTitle}>Today's tasks</Text>
                            <TouchableImage
                                onPress={() => navigation.navigate('profile')}
                                imgPath={require('../assets/account.png')}
                            />
                        </View>
                        <View style={styles.items}>
                            {
                                todos.length !== 0 && todos.map((item, index) => {
                                    return (
                                        <TaskCard key={index} text={item}
                                            updateModel={() => {
                                                setTData({ id: index, data: item });
                                                setUpdateVisibleModal(true)
                                            }}
                                            openModel={() => {
                                                setTData({ id: index, data: item });
                                                setVisible(true)
                                            }} />
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                    <AddTodoButton
                        onPress={() => {
                            if (!task) return;
                            dispatch(createTodo(task));
                            Keyboard.dismiss();
                            setTask(null);
                        }}
                    />
                </KeyboardAvoidingView>
                <CustomModel
                    visible={visible}
                    onRequestClose={() => setVisible(false)}
                >
                    <DeleteModel
                        tData={tData}
                        myFunc={() => setVisible(false)}
                    />
                </CustomModel>
                <CustomModel
                    visible={updateVisibleModal}
                    onRequestClose={() => setUpdateVisibleModal(false)}
                >
                    <UpdateModel
                        tData={tData}
                        onChangeText={setTData}
                        myFunc={() => setUpdateVisibleModal(false)}
                    />
                </CustomModel>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
});
export default TodoHome;