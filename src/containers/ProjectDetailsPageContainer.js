import { connect } from 'react-redux';

import { MODAL_TITLE_ICON, MODAL_TITLE_TEXT } from '../constants/modal';

import { handleCloseNotificationModalAC } from '../actionCreators/application';
import { getProjectAC, updateProjectAC } from '../actionCreators/projects';

import ProjectDetailsPage from '../components/Projects/ProjectDetailsPage';

const mapStateToProps = state => ({
  isLoading: state.application.isLoading,
  project: state.projectsData.currentProject,
  error: state.projectsData.error,
});

const mapDispatchToProps = {
  getProject: getProjectAC,
  updateProject: updateProjectAC,
  closeNotificationModal: handleCloseNotificationModalAC,
};

const mergeProps = (
  stateProps,
  { getProject, updateProject, closeNotificationModal },
  ownProps,
) => {
  return {
    ...ownProps,
    ...stateProps,
    getProject,
    updateProject,
    closeNotificationModal,
    notificationModalConfig: {
      title: MODAL_TITLE_TEXT.projectError,
      titleIcon: MODAL_TITLE_ICON.projectError,
      onClose: closeNotificationModal,
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectDetailsPage);
