import { connect } from 'react-redux';
import { logoutAC } from '../actionCreators/auth';

import Header from '../components/Header';

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

const mapDispatchToProps = {
  logout: logoutAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
