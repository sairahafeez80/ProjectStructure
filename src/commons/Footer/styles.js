import {COLORS} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
