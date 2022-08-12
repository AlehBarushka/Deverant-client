import { connect } from 'react-redux';

import { getAuthStatusPendingAC } from '../actionCreators/auth';

import App from '../App';

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

const mapDispatchToProps = {
  getAuthStatus: getAuthStatusPendingAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
