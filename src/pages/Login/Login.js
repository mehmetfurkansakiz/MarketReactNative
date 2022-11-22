import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/input/Input';

import styles from './Login.style';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
        <Text style={styles.logo_text}>DÜKGAN</Text>
      </View>
      <View style={styles.body_container}>
        <Input placeholder={'kullanici adinizi giriniz'} />
        <Input placeholder={'sifrenizi giriniz'} />
        <Button text="Giris Yap" />
      </View>
    </SafeAreaView>
  );
};

export default Login;
