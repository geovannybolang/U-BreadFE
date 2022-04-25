import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'

const SplashScreen = () => {
  return (
    <View style={styles.page}>
      <Logo />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FEC58C',
    alignItems: 'center',
    justifyContent: 'center',
  },
})