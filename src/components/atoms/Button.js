import React from 'react';
import styled from 'styled-components';

const Button = ({title, ...rest}) => {
  return <Btn title={title} {...rest} />;
};

export default Button;

const Btn = styled.Button``;
