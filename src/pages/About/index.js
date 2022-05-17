import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {HeaderCenter, Button, Gap} from '../../components';
import {Logo} from '../../assets';

const About = ({navigation}) => {
  return (
    <View>
      <HeaderCenter title="About"/>
      <View style={styles.page}>
      <Logo />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Aplikasi ini menyediakan fitur menu makanan dan minuman, diantaranya
          beberapa jenis roti dan ice cream. Diharapkan dengan hadirnya U-Bread
          dapat membantu para konsumen untuk mengetahui makanan dan minuman yang
          kami tawarkan.
        </Text>
        <Text style={styles.text1}>
          U-Bread menyediakan fitur-fitur yang di dalamnya fitur itu dapat
          membantu mempermudah para konsumen untuk membeli makanan maupun
          minuman.
        </Text>
        <Gap height={70} />
        <Button
          title="Back"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 30,

  },

  container: {
    // width: 297,
    // height: 100,
    // backgroundColor: 'black',
    paddingHorizontal: 24,
    
    
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'black',
    fontSize: 15,
    top: 30,
  },
  back: {
    // backgroundColor: 'orange',
  },
});
