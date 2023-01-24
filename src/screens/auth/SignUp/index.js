import React, {useState} from 'react';
import {Image} from 'react-native';
import {Button, Footer} from '@src/commons';
import {COLORS, IMAGES} from '@src/constants';
import {TextInput} from '@src/core-ui';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // render

  const onBtnPress = () => {
    if (email == '' && password == '') return;
    try {
     
    } catch (error) {}
  };

  return (
    <KeyboardAwareScrollView
      style={{flex: 1, paddingHorizontal: 20}}
      keyboardShouldPersistTaps="always">
      <Image
        source={IMAGES.logo}
        resizeMode={'contain'}
        style={{height: 200, width: 200, alignSelf: 'center'}}
      />
      <TextInput
        placeholder={'UserName'}
        placeholderTextColor={COLORS.BLACK}
        value={username}
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <TextInput
        placeholder={'Email'}
        placeholderTextColor={COLORS.BLACK}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder={'Password'}
        placeholderTextColor={COLORS.BLACK}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={onBtnPress}> Signup</Button>
      <Footer footerText1={"Don't have an account?"} footerText2={' Sign up'} />
    </KeyboardAwareScrollView>
  );
};
