import React, { useEffect, useState } from 'react';

import { Col, Container, Pagination, Row } from 'react-bootstrap';

import { LIMIT_OF_PROJECTS } from '../../../constants/pagination';
import { MODAL_TITLE_TEXT } from '../../../constants/modal';

import { getTotalPages } from '../../../utils/pagination';

import Loader from '../../Loader';
import ProjectsCardItem from '../ProjectsCardItem';
import AddProjectButton from '../AddProjectButton';
import ProjectModal from '../ProjectModal';
import AddProjectForm from '../AddProjectForm';

const ProjectsPage = ({
  projectsData,
  application,
  convertLastUpdateTime,
  getProjects,
  showModal,
  closeModal,
  createNewProject,
}) => {
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const { total, projects } = projectsData;
  const { isLoading, isModalShowing } = application;

  const totalOfPages = getTotalPages(total);

  useEffect(() => {
    getProjects(offset);
  }, [offset, getProjects]);

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
      <AddProjectButton handleShowModal={showModal} />
      <ProjectModal show={isModalShowing} title={MODAL_TITLE_TEXT.createProject}>
        <AddProjectForm createNewProject={createNewProject} closeModal={closeModal} />
      </ProjectModal>
      {isLoading ? (
        <div className='position-absolute top-50 start-50 translate-middle'>
          <Loader />
        </div>
      ) : (
        <>
          <Row className='g-4'>
            {projects.length > 0 ? (
              projects.map(project => (
                <Col key={project.id} lg={4} md={6}>
                  <ProjectsCardItem
                    convertLastUpdateTime={convertLastUpdateTime}
                    project={project}
                  />
                </Col>
              ))
            ) : (
              <div>You have no projects</div>
            )}
          </Row>
          {totalOfPages > 1 && (
            <Pagination className='justify-content-center mt-5'>{getPaginationItems()}</Pagination>
          )}
        </>
      )}
    </Container>
  );
};

export default ProjectsPage;
