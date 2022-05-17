import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#4B6BA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  text: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: 'white',
  },
});
