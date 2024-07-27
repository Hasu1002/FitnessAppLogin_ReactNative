import React from 'react';
import { View , StyleSheet, useWindowDimensions, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import Logo from '../../../assets/images/Logo';
import SocialButtons from '../../components/SocialButtons';
import {useForm} from 'react-hook-form';
const Login  = () => {
    const {height} = useWindowDimensions();
    const {control, handleSubmit, formState: {errors}} = useForm(); 
    const navigation = useNavigation() ;
    const onLoginPressed = (data) => {
        console.log(data);
        console.warn("Sign in");
        navigation.navigate("Home");
    }
    const onForgetPasswordPressed = () => {
        console.warn("Forget Password");        
        navigation.navigate("ForgetPass");
    }
    const onSignupPress = () => {
        console.warn("Going to Sign Up Page");
        navigation.navigate("SignUp");
    }
    return (
        <View style = {styles.root}>
            <Logo height = {height}/>
            <CustomInput 
                name = "txtUsername"
                placeholder = {"Username"} 
                control = {control} 
                rules = {{required: 'Username is required'}}
            />
            <CustomInput 
                name = "txtPassword"
                placeholder = {"Password"} 
                control = {control}
                rules = {{
                    required: 'Password is required', 
                    minLength: {
                        value: 8, 
                        message:'Password should be minimum 8 characters'
                    }
                }}
                securetxtentry 
            /> 
            
            <CustomButton 
                txt = "Sign In" 
                onPress={handleSubmit(onLoginPressed)} 
                type="Primary"
            />
            <CustomButton 
                txt = "Forget Password" 
                onPress={onForgetPasswordPressed} 
                type="Tertiary"
            />
            <SocialButtons />
            <CustomButton 
                txt = "Don't have an account? Create one" 
                onPress = {onSignupPress} 
                type = "Tertiary"
            />

        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})