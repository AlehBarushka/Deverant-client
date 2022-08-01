import { connect } from 'react-redux';

import { handleCloseModalAC } from '../actionCreators/application';
import { loginPendingAC, signUpPendingAC } from '../actionCreators/auth';

import AuthPage from '../components/Auth/AuthPage';

const mapStateToProps = state => ({
  auth: state.auth,
  isLoading: state.application.isLoading,
  isModalShowing: state.application.isModalShowing,
});

const mapDispatchToProps = {
  login: loginPendingAC,
  signUp: signUpPendingAC,
  closeModal: handleCloseModalAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
