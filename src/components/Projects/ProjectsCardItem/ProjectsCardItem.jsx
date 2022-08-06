import React from 'react';

import { RiDeleteBinLine } from 'react-icons/ri';
import { Card, Button } from 'react-bootstrap';

const ProjectsCardItem = ({ project, convertLastUpdateTime, deleteProject }) => {
  const lastUpdateTime = convertLastUpdateTime(project.lust_activity);

  const handleDelete = () => {
    deleteProject(project.id);
  };

  return (
    <Card>
      <Card.Header className='d-flex justify-content-end'>
        <Button size='sm' className='btn-delete' onClick={handleDelete}>
          <RiDeleteBinLine />
        </Button>
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
