import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(App);
