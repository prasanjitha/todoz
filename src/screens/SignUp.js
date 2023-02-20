import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AppInput from '../components/form/AppInput';
import Colors from '../config/Colors';
import ErrorText from '../components/form/ErrorText';
import { submitData } from '../redux/action/UserAction';
import Screen from '../components/Screen';
import AppLoader from '../components/AppLoader';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(4).label("Username"),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label("Password")
});
function SignUp(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { isLoading } = useSelector(state => state.userReducer);

    return (
        <Screen>

            <View style={styles.mainContainer}>
                <Text style={styles.mainTitle}>Let’s create</Text>
                <Text style={styles.mainTitle2}>your ToDoZ account</Text>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={values => dispatch(submitData(values, navigation))}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (<>
                        <AppInput
                            onBlur={() => setFieldTouched('username')}
                            onChangeText={handleChange('username')}
                            placeholder='Username'
                        />
                        <ErrorText touched={touched.password} errors={errors.username} />
                        <AppInput
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            // textContentType='email'
                            placeholder='Email'
                        />
                        <ErrorText touched={touched.email} errors={errors.email} />
                        <AppInput
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            // textContentType='password'
                            secureTextEntry
                            placeholder='Password'
                        />
                        <ErrorText touched={touched.password} errors={errors.password} />
                        <Text style={styles.acceptPolicy}>By signing up you accept the Terms of
                            Service and Privacy Policy.</Text>

                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </>)}
                </Formik>
                <View style={styles.containerText}>
                    <Text style={styles.haveAcText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
                        <Text style={styles.signinText}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isLoading && <AppLoader />}
        </Screen>
    );
}
const styles = StyleSheet.create({
    acceptPolicy: {
        top: 20,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
    button: {
        width: '100%',
        height: 52,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        elevation: 2,
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
        alignSelf: 'flex-start',
        paddingLeft: 15,
    },
    mainTitle2: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.primary,
        alignItems: 'flex-start',
        marginBottom: 60,
    },
    signinText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10
    }
});

export default SignUp;