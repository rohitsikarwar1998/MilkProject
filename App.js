import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {StatusBar, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import useAuth from './src/apis/useAuth';

const Stack = createStackNavigator();

const App = () => {
  const [user, intializing] = useAuth();
  console.log(user);
  return intializing ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
