import React from 'react';

import { Card, ProgressBar } from 'react-bootstrap';

const ProjectsCardItem = ({ project, convertLastUpdateTime }) => {
  const lastUpdateTime = convertLastUpdateTime(project.lust_activity);

  return (
    <Card>
      <Card.Header>
        <span>Progress:</span>
        <ProgressBar variant='success' now={20} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{project.project_name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <span className='text-muted'>{lastUpdateTime}</span>
      </Card.Footer>
    </Card>
  );
};

export default ProjectsCardItem;
