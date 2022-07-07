import React from 'react';
import { useParams } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';

const AuthPage = () => {
  const { type } = useParams();

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col lg={6}>{type === 'registration' ? <SignUpForm /> : <LoginForm />}</Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
