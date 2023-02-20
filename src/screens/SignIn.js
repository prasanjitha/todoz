import React from 'react';
import { Formik } from 'formik';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import AppInput from '../components/form/AppInput';
import ErrorText from '../components/form/ErrorText';
import Colors from '../config/Colors';
import { loginData } from '../redux/action/UserAction';
import Screen from '../components/Screen';
import AppLoader from '../components/AppLoader';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
});

function SignIn(props) {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { isLoading } = useSelector(state => state.userReducer);

    return (
        <Screen>
            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>Welcome back!
                    You’ve been missed</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => dispatch(loginData(values, navigation))}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, touched, values, setFieldTouched }) => (<>
                        <AppInput
                            value={values.email}
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            // textContentType='email'
                            placeholder='Email'
                        />
                        <ErrorText touched={touched.email} errors={errors.email} />
                        <AppInput
                            value={values.password}
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            // textContentType='password'
                            secureTextEntry
                            placeholder='Password'
                        />
                        <ErrorText touched={touched.password} errors={errors.password} />
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                    </>)}
                </Formik>
                <View style={styles.containerText}>
                    <Text style={styles.haveAcText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                        <Text style={styles.signinText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isLoading && <AppLoader />}
        </Screen>

    );
}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 52,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.white,
    },
    containerText: {
        paddingTop: 10,
        flexDirection: 'row',
    },
    haveAcText: {
        fontWeight: '500',
        fontSize: 16,
    },
    mainContainer: {
        padding: 20,
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 100,

    },
    signinText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10

    }
});
export default SignIn;