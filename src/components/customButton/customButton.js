import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, txt, type, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container,
      styles[`container_${type}`],
      bgColor ? {backgroundColor:bgColor} : {},
    ]}>
      <Text style={[
        styles.txt,
        styles[`txt_${type}`],
        fgColor ?  {color:fgColor} : {},
      ]}>{txt}</Text>
    </Pressable>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_Primary: {
      backgroundColor: '#3B71F3',
    },

    container_Secondary: {
      borderColor: '#3B71F3',
      borderWidth: 2
    },

    container_Tertiary: {},

    txt: {
        fontWeight: 'bold',
        color: 'white'
    },

    txt_Secondary: {
      color: '#3B71F3'
    },

    txt_Tertiary: {
      color: 'grey'
    }
})