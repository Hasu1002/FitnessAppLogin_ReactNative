import { View , Text , StyleSheet} from 'react-native'
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EmailVeriScreen = () => {
  const navigation = useNavigation() ;
  const {control, handleSubmit, formState: {errors}} = useForm(); 
  const onConfirmPress = () => {
    console.warn("Confirm is Pressed");
    navigation.navigate("Home");

  }
  const onResendPress = () => {
    console.warn("Resend is Pressed");
  }
  const onSignInPress = () => {
    console.warn("Sign Up pressed");
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Sign Up</Text>
      <CustomInput 
        name="numEcode" 
        placeholder={"Confirmation Code"}
        control = {control} 
        kbstyle={'phone-pad'}
        rules = {{required: 'Code is required'}}
      />
      <CustomButton txt="Confirm" onPress={handleSubmit(onConfirmPress)} bgColor="#FA9C1B" fgColor="white" />
      <CustomButton txt="Resend Code" onPress={onResendPress} type="Secondary"/>
      <CustomButton txt="Back to Sign Up" onPress={onSignInPress} type="Tertiary"/>
      
    </View>
  )
}

export default EmailVeriScreen

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