import { connect } from 'react-redux';

import { loginPendingAC, signUpPendingAC } from '../actionCreators/auth';

import AuthPage from '../components/Auth/AuthPage';

const mapStateToProps = state => ({ auth: state.auth, isLoading: state.application.isLoading });

const mapDispatchToProps = { login: loginPendingAC, signUp: signUpPendingAC };

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
