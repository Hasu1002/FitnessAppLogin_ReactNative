import { View , Text , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import React from 'react'
import {useForm} from 'react-hook-form';


const NewPassScreen = () => {
  const navigation = useNavigation() ;
  const {control, handleSubmit, formState: {errors}} = useForm(); 
  const onSumbitPress = () => {
    console.warn("Sumbit is Pressed");
    navigation.navigate("SignIn");
  }
  const onSignInPress = () => {
    console.warn("Sign in pressed");
    navigation.navigate("SignIn");
  }
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput 
        name="numCcode" 
        placeholder={"Confirmation Code"}
        control = {control} 
        kbstyle={'phone-pad'}
        rules = {{required: 'Code is required'}}
      />
       <CustomInput 
        name="txtPass"
        placeholder={"Password"}
        securetxtentry={true}
        control = {control} 
        rules = {{required: 'Password is required'}}
      />
      <CustomButton txt="Sumbit" onPress={handleSubmit(onSumbitPress)} type="Primary" />
      <CustomButton txt="Back to Sign In" onPress={onSignInPress} type="Tertiary"/>
      
    </View>
  )
}

export default NewPassScreen

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