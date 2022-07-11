import { connect } from 'react-redux';

import { loginPendingAC, signUpPendingAC } from '../actionCreators/auth';
import { setUserAC } from '../actionCreators/user';

import AuthPage from '../components/Auth/AuthPage';

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = { login: loginPendingAC, signUp: signUpPendingAC, setUser: setUserAC };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
