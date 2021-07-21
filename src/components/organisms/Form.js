import React from 'react';
import styled from 'styled-components';
import InputForm from '../molecules/InputForm';
import Button from '../atoms/Button';
import Seperator from '../atoms/Seperator';

const Form = ({otp}) => {
  return (
    <Wrapper>
      <InputForm name="phone" placeHolder="Mobile Number" type="numeric" />
      <Seperator space={20} />
      {otp && (
        <>
          <InputForm name="lock" placeHolder="Enter OTP" type="numeric" />
          <Seperator space={20} />
          <Button title="Resend" />
          <Seperator space={20} />
        </>
      )}
      <Button title="Login" />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.View`
  /* width: 100%; */
`;
