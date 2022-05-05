import React from 'react'
import {Header, Button, TextInput} from '../../components';
import { StyleSheet, Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Header title="Sign In"/>
      <TextInput />
      <Button title="Sign In" />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})