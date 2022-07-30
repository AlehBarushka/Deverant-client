import React, { useEffect, useState } from 'react';

import { Col, Container, Pagination, Row } from 'react-bootstrap';

import { LIMIT_OF_PROJECTS } from '../../constants/pagination';

import { getTotalPages } from '../../utils/pagination';

import Loader from '../../components/Loader';
import ProjectsCardItem from '../../components/ProjectsCardItem';
import AddProject from '../../components/Buttons/AddProject';

const Projects = ({ getProjects, projects, isLoading, convertLastUpdateTime, total }) => {
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const totalOfPages = getTotalPages(total);

  useEffect(() => {
    getProjects(offset);
  }, [getProjects, offset]);

  const changePage = page => {
    setActivePage(page);
    setOffset((page - 1) * LIMIT_OF_PROJECTS);
  };

  const getPaginationItems = () => {
    let items = [];

    for (let pageNumber = 1; pageNumber <= totalOfPages; pageNumber++) {
      items.push(
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === activePage}
          onClick={() => changePage(pageNumber)}>
          {pageNumber}
        </Pagination.Item>,
      );
    }

    return items;
  };

  return (
    <Container className='mt-5 mb-3'>
      <AddProject />
      {isLoading ? (
        <div className='position-absolute top-50 start-50 translate-middle'>
          <Loader />
        </div>
      ) : (
        <>
          <Row className='g-4'>
            {projects.length > 0 &&
              projects.map(project => (
                <Col key={project.id} lg={4} md={6}>
                  <ProjectsCardItem
                    convertLastUpdateTime={convertLastUpdateTime}
                    project={project}
                  />
                </Col>
              ))}
          </Row>
          {totalOfPages > 1 && (
            <Pagination className='justify-content-center mt-5'>{getPaginationItems()}</Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default Projects;
