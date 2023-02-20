import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import TodoHome from '../screens/TodoHome';
import Profile from '../screens/Profile';
import ExitIcon from '../components/ExitIcon';
import OnBoard from '../screens/OnBoard';


function Navigation(props) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='onboard' component={OnBoard} />
                <Stack.Screen name='signIn' component={SignIn} />
                <Stack.Screen name='signUp' component={SignUp} />
                <Stack.Screen name='todoHome' component={TodoHome} />
                <Stack.Screen options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: 'My Profile',
                    headerRight: () =>
                        <ExitIcon />
                }} name='profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;