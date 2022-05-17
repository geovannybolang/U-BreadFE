import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder, onChangeText}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: 'black',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
});
