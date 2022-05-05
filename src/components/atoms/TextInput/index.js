import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = () => {
  return (
    <View>
      <Text style={styles.text}>Email Address</Text>
      <TextInputRN style={styles.input} placeholder='Type your email address' />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    
  },

  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
  }
})