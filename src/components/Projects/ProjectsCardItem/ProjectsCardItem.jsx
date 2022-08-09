import React from 'react';
import { Link } from 'react-router-dom';

import { NAV_KEYS } from '../../../constants/navbar';

import { ImCross } from 'react-icons/im';
import { BsInfoCircleFill } from 'react-icons/bs';

import { Card, Button } from 'react-bootstrap';

const ProjectsCardItem = ({ project, convertLastUpdateTime, deleteProject }) => {
  const lastUpdateTime = convertLastUpdateTime(project.lust_activity);

  const handleDelete = () => {
    deleteProject(project.id);
  };

  return (
    <Card>
      <Card.Header className='text-end'>
        <Link to={`${NAV_KEYS.projects}/${project.id}`} className='card-link'>
          <Button variant='light' className='card__info-btn'>
            <BsInfoCircleFill />
          </Button>
        </Link>
        <Button variant='light' className='card__delete-btn' onClick={handleDelete}>
          <ImCross />
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
