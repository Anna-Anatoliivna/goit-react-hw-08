import { Field, Form, Formik } from 'formik';
import styles from './LoginForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not correct email')
    .required('Email is required field'),
  password: Yup.string()
    .required('Password is required field')
    .min(8, 'Password is too short')
    .max(50, 'Password is too long'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    // console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>User email</span>
          <Field className={styles.input} type="text" name="email" required />
          <ErrorMessage className={styles.err} name="email" component="span" />
        </label>
        <label className={styles.label}>
          <span>User password:</span>
          <Field
            className={styles.input}
            type="password"
            name="password"
            required
          />
          <ErrorMessage
            className={styles.err}
            name="password"
            component="span"
          />
        </label>
        <button className={styles.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
