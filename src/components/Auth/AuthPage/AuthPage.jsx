import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { NAV_KEYS } from '../../../constants/navbar';

import { Col, Container, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';

const AuthPage = ({ auth, login, signUp, setUser }) => {
  const { type } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    auth.isAuthenticated && navigate(NAV_KEYS.statistics, { replace: true });
  }, [auth.isAuthenticated, navigate]);

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col lg={6}>
          {type === 'registration' ? (
            <SignUpForm auth={auth} signUp={signUp} setUser={setUser} />
          ) : (
            <LoginForm auth={auth} login={login} setUser={setUser} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
