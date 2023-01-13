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

const KeyLogin = ({ handleChange }) => {
  const paperStyle = {
    padding: 40,
    height: '50vh',
    width: 400,
    margin: 'auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };
  const initialValues = {
    keyId: '',
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    keyId: Yup.string(),
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
          <h2>기업 로그인</h2>
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
                label="기업 키"
                name="key"
                fullWidth
                required
                helperText={<ErrorMessage name="key" />}
              />

              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="키 기억하기"
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
          {' '}
          <Link href="#" onClick={() => handleChange('event', 1)}>
            키 발급 문의
          </Link>
        </Typography>
      </Paper>
      <Footer />
    </Grid>
  );
};

export default KeyLogin;
