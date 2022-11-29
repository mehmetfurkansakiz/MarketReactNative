import React from 'react';
import {SafeAreaView, View, Text, Image, Alert} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/input/Input';
import {Formik} from 'formik';
import styles from './Login.style';
import * as Yup from 'yup';
import usePost from '../../hooks/usePost';
import {API_AUTH_URL} from '@env';

const ErrorMessagesSchema = Yup.object().shape({
  // username: Yup.string()
  //   .min(2, 'Username must be min 2 characters long')
  //   .max(20, 'Username must be max 20 characters long')
  //   .required('Required'),
  // password: Yup.string()
  //   .min(8, 'Password must be min 8 characters long')
  //   .matches(/[0-9]/, 'Password requires a number')
  //   .matches(/[a-z]/, 'Password requires a lowercase letter')
  //   .matches(/[A-Z]/, 'Password requires an uppercase letter')
  //   .matches(/[^\w]/, 'Password requires a symbol')
  //   .required('Required'),
});

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('DÜKGAN', 'Something happened!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('DÜKGAN', 'User not found!');
    } else {
      navigation.navigate('ProductsPage');
    }
  }

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
        onSubmit={handleLogin}
        validationSchema={ErrorMessagesSchema}>
        {({handleSubmit, handleChange, values, errors, touched}) => (
          <View style={styles.body_container}>
            <Input
              placeholder={'kullanici adinizi giriniz'}
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            {errors.username && touched.username && (
              <Text style={styles.error_login}>{errors.username}</Text>
            )}
            <Input
              placeholder={'sifrenizi giriniz'}
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            {errors.password && touched.password && (
              <Text style={styles.error_login}>{errors.password}</Text>
            )}
            <Button text="Giris Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
