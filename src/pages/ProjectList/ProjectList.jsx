import React, { useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import ProjectsCardItem from '../../components/ProjectsCardItem';

const ProjectList = ({ getProjects, projects }) => {
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <Container className='mt-5 mb-3'>
      <Row className='g-4 mb-5'>
        {projects.length > 0 &&
          projects.map(project => (
            <Col key={project.id} lg={4} md={6}>
              <ProjectsCardItem project={project} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProjectList;
