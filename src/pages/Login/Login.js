import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/input/Input';
import {Formik} from 'formik';
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
      <Formik
        initialValues={{username: '', password: ''}}
        onsubmit={formValues => console.log(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder={'kullanici adinizi giriniz'}
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder={'sifrenizi giriniz'}
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giris Yap" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
