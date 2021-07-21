import React from 'react';
import styled from 'styled-components';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Icon = ({name}) => {
  return <Icons name={name} size={24} />;
};

export default Icon;
