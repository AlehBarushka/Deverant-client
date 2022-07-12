import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
});

export const signUpValidation = yup.object().shape({
  userName: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
