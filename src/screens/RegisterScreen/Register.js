import React from 'react';
import {SafeAreaView,Text, StyleSheet, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialButtons from '../../components/SocialButtons';
import {useForm} from 'react-hook-form';

const Register = () => {

  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const navigation = useNavigation() ;

  const {control, handleSubmit, formState: {errors}} = useForm(); 
  const pwd = watch('password');

  const validate = () => {
    console.warn("Signup Pressed")
    navigation.navigate("ConfirmEmail");
  }
  const onSignInPress = () => {
    console.warn("Sign in pressed");
    navigation.navigate("SignIn");
  }
  return(
    <SafeAreaView style={styles.root} >
      <Text style={styles.title}>Create an account</Text>
      <CustomInput 
        name="txtName" 
        placeholder={"Name"}  
        control = {control} 
        autofocus 
        rules = {{
          required: 'Name is required',
          minLength: {
            value: 3, 
            message: 'Name should be atleast 3 characters long'
          },
          maxLength: {
            value: 20,
            message: 'Name should be max 20 characters long'
          }
        }}
      />
      <CustomInput 
        name = "txtUsername"
        placeholder = {"Username"} 
        control = {control} 
        rules = {{
          required: 'Username is required',
          minLength: {
            value: 3, 
            message: 'UserName should be atleast 3 characters long'
          },
          maxLength: {
            value: 20,
            message: 'UserName should be max 20 characters long'
          }
        }}
      />
      <CustomInput 
        name="txtEmail" 
        placeholder={"Email"}
        control = {control} 
        kbstyle={'email-address'}
        rules = {{
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX, message: 'Email is invalid'
          }
        }}
      />
      <CustomInput 
        name="numPhone" 
        placeholder={"Phone number"}
        control = {control} 
        kbstyle={'phone-pad'}
        rules = {{
          required: 'Phone Number is required',
          minLength: {
            value: 10, 
            message: 'PhoneNumber should be 10 numbers long'
          }
        }}
      />
      <CustomInput 
        name="txtPass"
        placeholder={"Password"}
        securetxtentry={true}
        control = {control} 
        rules = {{
          required: 'Password is required',
          minLength: {
            value: 8, 
            message:'Password should be minimum 8 characters'
          }
        }}
      />
      <CustomInput 
        name="txtCpass"
        placeholder={"Confirm Password"}
        securetxtentry={true}
        control = {control} 
        rules = {{
          required: 'Confirm Password is required',
          validate: value =>
            value === pwd || 'Password do not match'
        }} 
      />
      <CustomButton txt="Sign-Up" onPress={handleSubmit(validate)} type="Primary" bgColor="#d24787" fgColor="white" />
      <SocialButtons />
      <CustomButton txt="Already have an Account? Sign In" onPress={onSignInPress} type="Tertiary"/>
    </SafeAreaView>
  )
}
export default Register;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    }
});