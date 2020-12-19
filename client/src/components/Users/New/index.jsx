import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="Student Register">

      </Header>
      
      <Container>
    

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;