import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {useForm} from 'react-hook-form';

const ForgetPassScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, formState: {errors}} = useForm(); 
  const onSendPressed = () => {
    console.warn("Send is clicked");        
    navigation.navigate("NewPass");
  }
  const onSignInpressed = () => {
    console.warn("Back to SignIn is clicked");        
    navigation.navigate("SignIn");
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput 
        name = "txtUsername"
        placeholder = {"Username"} 
        control = {control} 
        rules = {{required: 'Username is required'}}
      />
      <CustomButton txt = {"Send"} onPress = {handleSubmit(onSendPressed)} bgColor = "#FA9C1B" fgColor = "#ffffff" />
      <CustomButton txt = {"Back to SignIn"} onPress = {onSignInpressed} type = "Tertiary"/>
    </View>
  )
}
export default ForgetPassScreen;

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