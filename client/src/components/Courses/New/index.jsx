import React from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Courses">
        Course Info
      </Header>

      <Container>
        <Form endpoint="courses"/>
      </Container>
    </>
  );
}
 
export default New;