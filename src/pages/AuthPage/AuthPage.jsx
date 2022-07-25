import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { DEFAULT_SELCTED_LINK } from '../../constants/navbar';
import { MODAL_TITLE_ICON, MODAL_TITLE_TEXT } from '../../constants/modal';

import { Col, Container, Row } from 'react-bootstrap';

import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm';
import NotificationModal from '../../components/NotificationModal';

const AuthPage = ({ auth, isLoading, login, signUp, showModal, closeModal }) => {
  const { type } = useParams();
  const { isAuthenticated, error } = auth;

  return isAuthenticated ? (
    <Navigate to={DEFAULT_SELCTED_LINK} />
  ) : (
    <>
      <NotificationModal
        show={showModal}
        title={MODAL_TITLE_TEXT.authError}
        titleIcon={MODAL_TITLE_ICON.authError}
        bodyText={error}
        closeModal={closeModal}
      />
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
