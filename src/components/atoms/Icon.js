import React from 'react';
import styled from 'styled-components';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Icon = ({name, ...rest}) => {
  return <Icons name={name} size={24} {...rest} />;
};

export default Icon;
