import { connect } from 'react-redux';

import { handleCloseModalAC } from '../actionCreators/application';
import { loginPendingAC, signUpPendingAC } from '../actionCreators/auth';

import Auth from '../pages/Auth';

const mapStateToProps = state => ({
  auth: state.auth,
  isLoading: state.application.isLoading,
  showModal: state.application.showModal,
});

const mapDispatchToProps = {
  login: loginPendingAC,
  signUp: signUpPendingAC,
  closeModal: handleCloseModalAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
