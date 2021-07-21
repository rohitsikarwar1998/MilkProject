import React from 'react';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import {resetStack} from '../utils/auth';
const Home = ({navigation}) => {
  return (
    <Button
      title="sign out"
      onPress={() =>
        auth()
          .signOut()
          .then(() => resetStack('Login', navigation))
      }
    />
  );
};

export default Home;
