import React, { useEffect, useState } from 'react';

import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { LIMIT_OF_PROJECTS } from '../../../constants/pagination';
import { MODAL_TITLE_TEXT } from '../../../constants/modal';

import { getTotalPages } from '../../../utils/pagination';

import Loader from '../../Loader';
import ProjectsCardItem from '../ProjectsCardItem';
import ActionModal from '../../Modal/ActionModal';
import AddProjectForm from '../AddProjectForm';
import NotificationModal from '../../Modal/NotificationModal';

const ProjectsPage = ({
  total,
  projects,
  error,
  isLoading,
  convertLastUpdateTime,
  notificationModalConfig,
  showActionModal,
  closeActionModal,
  getProjects,
  createNewProject,
  deleteProject,
}) => {
  const [offset, setOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);

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
    <>
      <ActionModal title={MODAL_TITLE_TEXT.createProject}>
        <AddProjectForm createNewProject={createNewProject} closeModal={closeActionModal} />
      </ActionModal>
      <NotificationModal {...notificationModalConfig}>{error}</NotificationModal>
      <Container className='mt-5 mb-5'>
        <Button onClick={showActionModal} className='button-primary mb-3'>
          <AiOutlineFileAdd className='me-1' />
          New Project
        </Button>

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
                      deleteProject={deleteProject}
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
              <Pagination className='position-absolute start-50 translate-middle-x'>
                {getPaginationItems()}
              </Pagination>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default ProjectsPage;
