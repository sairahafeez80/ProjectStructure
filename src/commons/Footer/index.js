import {Text} from '@src/core-ui';
import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Footer = ({footerText1, footerText2, onPress}) => {
  return (
    <View style={styles.footerView}>
      <Text customStyle={styles.footerText}>
        {footerText1}
        <Text onPress={onPress} customStyle={styles.footerLink}>
          {footerText2}
        </Text>
      </Text>
    </View>
  );
};
