import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: '73vh',
    width: 500,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('please enter valid email'),
    password: Yup.string(),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Header />;
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>로그인</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="이메일"
                name="email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="비밀번호"
                name="password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="계정 기억하기"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? 'Loading' : '로그인'}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">비밀번호를 잊으셨나요?</Link>
        </Typography>
        <Typography>
          {' '}
          아직 가입하지 않으셨나요?
          <Link href="#" onClick={() => handleChange('event', 1)}>
            회원가입
          </Link>
        </Typography>
      </Paper>
      <Footer />
    </Grid>
  );
};

export default Login;
