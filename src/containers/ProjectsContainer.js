import { connect } from 'react-redux';

import { createNewProjectAC, getProjectsAC } from '../actionCreators/projects';

import { convertLastUpdateTime } from '../utils/date';

import ProjectsPage from '../components/Projects/ProjectsPage';
import { handleCloseModalAC, handleShowModalAC } from '../actionCreators/application';

const mapStateToProps = state => ({
  projectsData: state.projectsData,
  application: state.application,
});

const mapDispatchToProps = {
  getProjects: getProjectsAC,
  createNewProject: createNewProjectAC,
  showModal: handleShowModalAC,
  closeModal: handleCloseModalAC,
};

const mergeProps = (
  stateProps,
  { getProjects, createNewProject, showModal, closeModal },
  ownProps,
) => {
  return {
    ...ownProps,
    ...stateProps,
    getProjects,
    createNewProject,
    showModal,
    closeModal,
    convertLastUpdateTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectsPage);
