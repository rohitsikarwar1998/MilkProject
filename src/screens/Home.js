import React, {useContext} from 'react';
import Button from '../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import {resetStack} from '../utils/auth';
import {UserContext} from '../../App';
import HomeTabsNavigation from '../navigations/HomeTabsNavitation';
const Home = ({navigation}) => {
  const user = useContext(UserContext);
  console.log('home');
  console.log(user);
  return (
    <>
      <HomeTabsNavigation />
      <Button
        title="sign out"
        onPress={() =>
          auth()
            .signOut()
            .then(() => resetStack('Login', navigation))
        }
      />
    </>
  );
};

export default Home;
