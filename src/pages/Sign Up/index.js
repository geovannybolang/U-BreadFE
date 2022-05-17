import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 200,
      maxWidth: 200,
      includeBase64: true,
    });
    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'Unggah foto dibatalkan',
        type: 'default',
        backgroundColor: '#F45050',
        color: 'white',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };

  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const continuePress = async() => {
    const reqOpt = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userName: userName,
        email: email,
        password: password,
      }),
    };

    const req = await fetch('http://192.168.6.253:3000/api/createaccount', reqOpt);
    const res = await req.json();
    console.log(res)
    if(res.status === 'berhasil') {
      navigation.navigate('SignIn');
    }
    else if(res.status === 'gagal') {
      showMessage({
        message: res.message,
        type: 'default',
        backgroundColor: '#F45050',
        color: 'white',
      });
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Sign Up" />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity onPress={getPhoto} activeOpacity={0.5}>
              {!hasPhoto && (
                <View style={styles.addPhoto}>
                  <Text style={styles.addPhotoText}>Add Photo</Text>
                </View>
              )}
              {hasPhoto && (
                <Image source={{uri: photo}} style={styles.avatar} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TextInput title="Full Name" placeholder="Type your full name" onChangeText={(val) => setUserName(val)} />
        <Gap height={26} />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
          onChangeText={(val) => setEmail(val)}
        />
        <Gap height={26} />
        <TextInput title="Password" placeholder="Type your password" onChangeText={(val) => setPassword(val)} />
        <Gap height={40} />
        <Button title="Continue" onPress={() => continuePress()} />
        <Gap height={26} />
        <Text style={styles.Text}>Already have account?</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: '#FEC58C',
    paddingHorizontal: 24,
  },

  Text: {
    textAlign: 'center',
  },

  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 12,
    fontFamily: 'Inter',
    maxWidth: 40,
    textAlign: 'center',
  },

  border: {
    borderWidth: 1,
    borderColor: '8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 1,
  },
});
