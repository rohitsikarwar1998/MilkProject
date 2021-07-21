import React from 'react';
import styled from 'styled-components';
import Login from './src/screens/Login';

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

const App = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default App;
