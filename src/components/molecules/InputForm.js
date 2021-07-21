import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';
import Input from '../atoms/Input';

const InputForm = ({name, ...rest}) => {
  return (
    <Wrapper>
      <ModifiedIcon>
        <Icon name={name} />
      </ModifiedIcon>
      <ModifiedInput>
        <Input {...rest} />
      </ModifiedInput>
    </Wrapper>
  );
};

export default InputForm;

const Wrapper = styled.View`
  width: 90%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  border: 1px;
  height: 60px;
  border-radius: 5px;
`;

const ModifiedIcon = styled.View`
  border-right-width: 1px;
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModifiedInput = styled.View`
  flex: 8;
`;
