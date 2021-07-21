import React from 'react';
import styled from 'styled-components';

const Input = ({placeHolder, type}) => {
  return <Inp placeholder={placeHolder} keyboardType={type} />;
};

export default Input;

const Inp = styled.TextInput`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  letter-spacing: 1px;
`;
