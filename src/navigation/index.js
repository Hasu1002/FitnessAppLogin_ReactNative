import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import EmailVeriScreen from '../screens/EmailVeriScreen';
import ForgetPassScreen from '../screens/ForgetPassScreen';
import NewPassScreen from '../screens/NewPassScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={Register} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ConfirmEmail" component={EmailVeriScreen} />
            <Stack.Screen name="ForgetPass" component={ForgetPassScreen} />
            <Stack.Screen name="NewPass" component={NewPassScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;