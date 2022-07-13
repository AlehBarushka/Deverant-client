import React from 'react';

import { Container, Alert } from 'react-bootstrap';

const Plug = () => {
  return (
    <Container className='mt-5'>
      <Alert variant='secondary'>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Oh yes, you have successfully read this important warning message. This content is not yet
          available. But we are working on it!
        </p>
        <hr />
        <p className='mb-0'>Whenever the page is not ready yet, you will see this notification.</p>
      </Alert>
    </Container>
  );
};

export default Plug;
