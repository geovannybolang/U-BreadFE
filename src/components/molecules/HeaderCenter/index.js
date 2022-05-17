import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderCenter = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderCenter;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 9,
    backgroundColor: '#FEC58C',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: 'black',
    textAlign: 'center',
  },
});
