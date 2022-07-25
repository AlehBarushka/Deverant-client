import { connect } from 'react-redux';

import { getProjectsAC } from '../actionCreators/projects';

import ProjectList from '../pages/ProjectList/ProjectList';

const mapStateToProps = state => ({
  projects: state.projectsData.projects,
  isLoading: state.application.isLoading,
});

const mapDispatchToProps = {
  getProjects: getProjectsAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
