import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingLeft : 24,
    paddingTop : 28,
    paddingBottom : 9,
    backgroundColor : '#FEC58C',
  },
  text:{
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
});