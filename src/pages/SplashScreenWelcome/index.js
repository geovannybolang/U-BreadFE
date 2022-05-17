import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreenWelcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Text style={styles.Text}>Welcome...</Text>
    </View>
  );
};

export default SplashScreenWelcome

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: '#FEC58C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'black',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
  },
});