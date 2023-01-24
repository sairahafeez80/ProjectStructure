import {Text} from '@src/core-ui';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const Button = ({children, customStyle, customTextStyle, onPress}) => {
  // render
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, customStyle]}>
      <Text style={[styles.btnText, customTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#788eec',

    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
