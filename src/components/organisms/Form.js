import React, {useState} from 'react';
import styled from 'styled-components';
import InputForm from '../molecules/InputForm';
import Button from '../atoms/Button';
import Seperator from '../atoms/Seperator';
import {resetStack} from '../../utils/auth';
import {signInWithPhoneNumber, confirmCode} from '../../apis/apiCalls';

const Form = ({otp, confirm, setConfirm, code, setCode, navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  console.log(mobileNumber);
  console.log(code);
  return (
    <Wrapper>
      <InputForm
        name="phone"
        placeHolder="Mobile Number"
        type="numeric"
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}
      />
      <Seperator space={20} />
      {otp && (
        <>
          <InputForm
            name="lock"
            placeHolder="Enter OTP"
            type="numeric"
            value={code}
            onChangeText={text => setCode(text)}
          />
          <Seperator space={20} />
          <Button title="Resend" />
          <Seperator space={20} />
        </>
      )}
      <Button
        title={otp ? 'Login' : 'Send OTP'}
        onPress={
          !otp
            ? e => signInWithPhoneNumber(setConfirm, mobileNumber)
            : e =>
                confirmCode(confirm, code, () => resetStack('Home', navigation))
        }
      />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.View`
  /* width: 100%; */
`;
