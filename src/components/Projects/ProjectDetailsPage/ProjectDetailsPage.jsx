import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineProject } from 'react-icons/ai';

import Loader from '../../Loader';
import EditProjectForm from '../EditProjectForm';
import NotificationModal from '../../Modal/NotificationModal';

const ProjectDetailsPage = ({
  getProject,
  updateProject,
  isLoading,
  project,
  notificationModalConfig,
  error,
}) => {
  const { projectId } = useParams();

  useEffect(() => {
    getProject(projectId);
  }, [getProject, projectId]);

  return (
    <>
      <NotificationModal {...notificationModalConfig}>{error}</NotificationModal>
      <Container className='mt-5'>
        <Row className='justify-content-center'>
          <Col lg={6}>
            <h2 className='text-center fs-3 mb-3 title'>
              <AiOutlineProject className='me-1 fs-5' />
              Project details
            </h2>
            {isLoading ? (
              <div className='position-absolute top-50 start-50 translate-middle'>
                <Loader />
              </div>
            ) : (
              <EditProjectForm project={project} updateProject={updateProject} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetailsPage;
