import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(Header);
