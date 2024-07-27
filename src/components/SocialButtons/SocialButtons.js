import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customButton';


const SocialButtons = () => {
    const onSignUpFacebook = () => {
        console.warn("Logged In with Facebook")
      }
      const onSignUpGoogle = () => {
        console.warn("Logged In with Google");
      }
    return (
        <View>
            <CustomButton 
                txt="Sign Up with Facebook" 
                onPress={onSignUpFacebook} 
                type="Primary"
                bgColor="#E7EAF4"
                fgColor="#4765A9"    
            />
            <CustomButton 
                txt="Sign Up with Google" 
                onPress={onSignUpGoogle} 
                type="Primary"
                bgColor="#FAE9EA"
                fgColor="#DD4D44"    
            />
        </View>
    )
}

export default SocialButtons