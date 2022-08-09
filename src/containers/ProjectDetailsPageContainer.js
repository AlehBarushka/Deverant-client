import { connect } from 'react-redux';

import { getProjectAC } from '../actionCreators/projects';

import ProjectDetailsPage from '../components/Projects/ProjectDetailsPage';

const mapStateToProps = state => ({
  isLoading: state.application.isLoading,
  project: state.projectsData.currentProject,
});

const mapDispatchToProps = {
  getProject: getProjectAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage);
