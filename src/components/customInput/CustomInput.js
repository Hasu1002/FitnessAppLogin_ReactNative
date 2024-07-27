import { View, Text , TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, placeholder, rules = {}, securetxtentry, autofocus, kbstyle}) => {

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderColor: 'grey',
        borderWidth: 2,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5
    },
    input: {},
  })

  return (

      <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
          <View style={[styles.container,{borderColor: error ? 'red' : 'white' }]} >
            <TextInput 
              value = {value} 
              onChangeText={onChange}  
              placeholder={placeholder} 
              style={styles.input} //{ paddingTop: 10 ,height: 45, fontSize: 18, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555' }}
              secureTextEntry = {securetxtentry}
              keyboardType = {kbstyle}
              autoFocus = {autofocus}
              onBlur={onBlur}
            /> 
          </View>
            {error && (
            <Text style = {{color: 'red',alignSelf: 'stretch'}}> {error.message || 'error'}</Text>
            )}
          </>
        )}
      />
  )  
}

export default CustomInput;