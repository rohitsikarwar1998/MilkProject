import React, {useState} from 'react';
import Form from '../components/organisms/Form';
import styled from 'styled-components';

const Login = ({navigation}) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const state = {
    confirm,
    setConfirm,
    code,
    setCode,
    navigation,
  };

  return (
    <Container>
      <Form otp={confirm} {...state} />
    </Container>
  );
};

export default Login;

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: antiquewhite;
`;

// const TitleContainer = styled.View`
//   width: 100%;
//   height: 100%;
//   box-shadow: 0 0 10px #ccc;
//   background-color: white;
//   padding: 20px;
//   border-radius: 20px;
// `;

// const Title = styled.Text`
//   font-size: 20px;
// `;
