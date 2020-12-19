import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Student Login">
        <p>
          <strong>Put Your Username and Password</strong>.
        </p>
      </Header>
      
      <Container>
        <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;