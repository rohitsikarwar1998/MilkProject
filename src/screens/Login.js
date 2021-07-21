import React from 'react';
import Form from '../components/organisms/Form';
import {StatusBar} from 'react-native';

const Login = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Form otp={false} />
    </>
  );
};

export default Login;
