import { connect } from 'react-redux';

import { MODAL_TITLE_ICON, MODAL_TITLE_TEXT } from '../constants/modal';

import { handleCloseNotificationModalAC } from '../actionCreators/application';
import { loginPendingAC, signUpPendingAC } from '../actionCreators/auth';

import AuthPage from '../components/Auth/AuthPage/AuthPage';

const mapStateToProps = state => ({
  auth: state.auth,
  isLoading: state.application.isLoading,
});

const mapDispatchToProps = {
  login: loginPendingAC,
  signUp: signUpPendingAC,
  closeNotificationModal: handleCloseNotificationModalAC,
};

const mergeProps = (stateProps, { login, signUp, closeNotificationModal }, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    login,
    signUp,
    notificationModalConfig: {
      title: MODAL_TITLE_TEXT.authError,
      titleIcon: MODAL_TITLE_ICON.authError,
      onClose: closeNotificationModal,
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AuthPage);
