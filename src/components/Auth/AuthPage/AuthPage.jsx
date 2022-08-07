import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { DEFAULT_SELCTED_LINK } from '../../../constants/navbar';

import { Col, Container, Row } from 'react-bootstrap';

import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import NotificationModal from '../../Modal/NotificationModal';

const AuthPage = ({ auth, isLoading, login, signUp, notificationModalConfig }) => {
  const { type } = useParams();
  const { isAuthenticated, error } = auth;

  return isAuthenticated ? (
    <Navigate to={DEFAULT_SELCTED_LINK} />
  ) : (
    <>
      <NotificationModal {...notificationModalConfig}>{error}</NotificationModal>
      <Container className='mt-5 pt-5'>
        <Row className='justify-content-center'>
          <Col lg={6}>
            {type === 'registration' ? (
              <SignUpForm isLoading={isLoading} signUp={signUp} />
            ) : (
              <LoginForm isLoading={isLoading} login={login} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthPage;
