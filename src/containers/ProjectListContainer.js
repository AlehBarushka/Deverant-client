import { connect } from 'react-redux';

import { getProjectsAC } from '../actionCreators/projects';

import { convertLastUpdateTime } from '../utils/date';

import ProjectList from '../pages/ProjectList';

const mapStateToProps = state => ({
  projects: state.projectsData.projects,
  isLoading: state.application.isLoading,
  total: state.projectsData.total,
});

const mapDispatchToProps = {
  getProjects: getProjectsAC,
};

const mergeProps = (stateProps, { getProjects }, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    getProjects,
    convertLastUpdateTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectList);
