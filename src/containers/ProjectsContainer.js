import { connect } from 'react-redux';

import { MODAL_TITLE_ICON, MODAL_TITLE_TEXT } from '../constants/modal';

import { createNewProjectAC, deleteProjectAC, getProjectsAC } from '../actionCreators/projects';

import { convertLastUpdateTime } from '../utils/date';

import ProjectsPage from '../components/Projects/ProjectsPage';
import {
  handleCloseActionModalAC,
  handleCloseNotificationModalAC,
  handleShowActionModalAC,
} from '../actionCreators/application';

const mapStateToProps = state => ({
  projects: state.projectsData.projects,
  total: state.projectsData.total,
  error: state.projectsData.error,
  isLoading: state.application.isLoading,
});

const mapDispatchToProps = {
  getProjects: getProjectsAC,
  createNewProject: createNewProjectAC,
  deleteProject: deleteProjectAC,
  showActionModal: handleShowActionModalAC,
  closeActionModal: handleCloseActionModalAC,
  closeNotificationModal: handleCloseNotificationModalAC,
};

const mergeProps = (
  stateProps,
  {
    getProjects,
    createNewProject,
    showActionModal,
    closeActionModal,
    deleteProject,
    closeNotificationModal,
  },
  ownProps,
) => {
  return {
    ...ownProps,
    ...stateProps,
    getProjects,
    createNewProject,
    deleteProject,
    notificationModalConfig: {
      title: MODAL_TITLE_TEXT.projectError,
      titleIcon: MODAL_TITLE_ICON.projectError,
      onClose: closeNotificationModal,
    },
    showActionModal,
    closeActionModal,
    convertLastUpdateTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectsPage);
