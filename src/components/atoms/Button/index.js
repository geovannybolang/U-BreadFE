import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#4B6BA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize : 14,
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
})