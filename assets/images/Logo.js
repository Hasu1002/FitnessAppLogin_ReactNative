import React from 'react'
import { Image , StyleSheet } from 'react-native'

const Logo = ({height}) => (
    <Image source={require('E:/Milksis/Milksis03/assets/image/applogo.gif')} style={[styles.logo, {height: height*0.3}]} />
)
export default Logo

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 100,
        maxWidth: 300,
        maxHeight: 200
    },
})