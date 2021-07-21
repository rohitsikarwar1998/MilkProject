import React from 'react';
import styled from 'styled-components';

const Seperator = ({space}) => {
  return <Sep space={space} />;
};

export default Seperator;

const Sep = styled.View`
  height: ${props => props.space || 5}px;
`;
