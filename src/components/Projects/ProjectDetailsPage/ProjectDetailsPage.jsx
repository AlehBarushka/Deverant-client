import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../Loader';
import EditProjectForm from '../EditProjectForm';

const ProjectDetailsPage = ({ getProject, isLoading, project }) => {
  const { projectId } = useParams();

  useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId]);

  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        <Col lg={6}>
          {isLoading ? (
            <div className='position-absolute top-50 start-50 translate-middle'>
              <Loader />
            </div>
          ) : (
            <EditProjectForm project={project} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetailsPage;
