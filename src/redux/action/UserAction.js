import { auth } from "../../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import Toast from 'react-native-toast-message';
import { db } from "../../config/firebase";
import { ref, set } from 'firebase/database';


export const SUBMIT_DATA = 'SUBMIT_DATA';
export const LOGIN_DATA = 'LOGIN_DATA';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const IS_LOADING = 'IS_LOADING';

export const createTodo = todo => dispatch => {
    dispatch({
        type: CREATE_TODO,
        payload: todo
    });
};

export const updateTodo = todo => dispatch => {
    dispatch({
        type: UPDATE_TODO,
        payload: todo
    });
};
export const deleteTodo = todoId => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: todoId
    });
};

export const submitData = (data, navigation) => async dispatch => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        });
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                set(ref(db, 'users/' + auth.currentUser.uid), {
                    username: data.username,
                    email: data.email
                })
                console.log('User account created & signed in!');
                Toast.show({
                    type: 'success',
                    text1: 'User Created Success!',
                    text2: `Please login 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
                navigation.navigate('signIn');
            })
            .catch(error => {
                Toast.show({
                    type: 'error',
                    text1: 'Invlid creadential!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            });
    } catch (e) {
        console.log(e);
    }
}
export const loginData = (data, navigation) => async dispatch => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        });
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                Toast.show({
                    type: 'success',
                    text1: 'Hi welcome to todoz!',
                    text2: `Start create your todos 👋`
                });
                console.log(userCredential);
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
                navigation.navigate('todoHome');
            }).catch((error) => {
                Toast.show({
                    type: 'error',
                    text1: 'Invalid creadential!',
                    text2: `Please try again 👋`
                });
                dispatch({
                    type: IS_LOADING,
                    payload: false
                });
                console.log(error.message);
            });
    } catch (e) {
        console.log(e);
    }
}