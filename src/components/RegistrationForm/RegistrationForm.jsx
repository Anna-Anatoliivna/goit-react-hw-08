import { Field, Form, Formik } from 'formik';
import styles from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';


const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required field')
    .min(3, 'Name is too short')
    .max(50, 'Name is too long'),
  email: Yup.string()
    .email('Not correct email')
    .required('Email is required field'),
  password: Yup.string()
    .required('Password is required field')
    .min(8, 'Password is too short')
    .max(50, 'Password is too long'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  

  const handleSubmit = (values, actions) => {
dispatch(register(values));
    // console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>User name:</span>
          <Field className={styles.input} type="text" name="name" required />
          <ErrorMessage className={styles.err} name="name" component="span" />
        </label>

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
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
