import React, {useState} from 'react';
import {Header, Button, TextInput, Gap} from '../../components';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const signInpress = async() => {
    const req = await fetch(`http://192.168.6.253:3000/api/login?email=${email}&password=${password}`);
    const res = await req.json();
    console.log(res);
    if(res.status === 'gagal') {
      showMessage({
        message: res.message,
        type: 'default',
        backgroundColor: '#F45050',
        color: 'white',
      });
    }
    else if (res.status === 'berhasil') {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
          onChangeText={(val) => setEmail(val)}
        />
        <Gap height={30} />
        <TextInput title="Password" placeholder="Type your password" onChangeText={(val) => setPassword(val)} />
        <Gap height={50} />
        <Button 
          title="Sign In" 
          onPress={() => signInpress()}
        />
        <Gap height={50} />
        <Text style={styles.Text}>Don't have account?</Text>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: '#FEC58C',
    paddingHorizontal: 24,
    paddingTop: 26,
  },

  Text: {
    textAlign: 'center',
    color: 'black',
  },
});
