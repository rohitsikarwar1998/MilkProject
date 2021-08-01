/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import firestore from '@react-native-firebase/firestore';

const HomeTabs = ({route}) => {
  useEffect(() => {
    const subscriber = firestore()
      .collection(route.params.tabTitle)
      .add({
        name: 'rohit',
        age: 22,
      })
      .then(() => console.log('added successfully'))
      .catch(err => console.log(err));
    return () => subscriber();
  }, []);
  const {tabTitle} = route.params;
  return <Text>{tabTitle}</Text>;
};

export default HomeTabs;

const Text = styled.Text``;
