import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SignUp = () => {
  // 폼 크기 조절입니다
  const paperStyle = { padding: 20, width: 500, margin: '0 auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };

  //입력 값을 모아주는 역할입니다
  const initialValues = {
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    addRess: '',
    birthDate: '',
    expire: '',
    // termsAndConditions: false,
  };

  // 유효성 검사 역할입니다
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('이름을 입력해주세요.'),
    email: Yup.string()
      .email('올바른 이메일을 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    gender: Yup.string()
      .oneOf(['m', 'w'], '성별을 선택해주세요.')
      .required('성별을 선택해주세요.'),
    phoneNumber: Yup.string()
      .typeError('올바른 전화번호를 입력해주세요')
      .required('전화번호를 입력해주세요.'),
    password: Yup.string()
      .min(8, '비밀번호는 8자리 이상 입력해주세요.')
      .required('비밀번호를 입력해주세요.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], '비밀번호가 다릅니다.')
      .required('비밀번호 확인해주세요.'),
    addRess: Yup.string().required('주소를 입력해주세요.'),
    birthDate: Yup.string().required('생년월일을 입력해주세요.'),
    expire: Yup.string()
      .oneOf(['1year', '3year', 'userWithdrawal'])
      .required('유효기간을 선택해주세요.'),

    //약관 체크박스 온 & 오프 역할입니다.
    // termsAndConditions: Yup.string().oneOf(
    //   ['true'],
    //   'Accept terms & conditions'
    // ),
  });

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    //상단 이름
    <Grid>
      <Header />
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>회원가입</h2>
          <Typography variant="caption" gutterBottom>
            스마트인재개발원 포털에 오신걸 환영합니다!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="이메일"
                helperText={<ErrorMessage name="email" />}
              />
              <br />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="비밀번호"
                helperText={<ErrorMessage name="password" />}
              />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                type="password"
                label="비밀번호 확인"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <br />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="이름"
                helperText={<ErrorMessage name="name" />}
              />
              <br />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="addRess"
                label="주소"
                helperText={<ErrorMessage name="addRess" />}
              />
              <br />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="phoneNumber"
                label="전화번호"
                helperText={<ErrorMessage name="phoneNumber" />}
              />
              <br />
              <br />
              <Field
                as={TextField}
                fullWidth
                name="birthDate"
                label="생년월일"
                helperText={<ErrorMessage name="birthDate" />}
              />
              <br />
              <br />
              {/* 성별 선택 */}
              <div>
                <FormControl component="fieldset" style={marginTop}>
                  <FormLabel component="legend">성별</FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-label="gender"
                    name="gender"
                    style={{ display: 'initial' }}
                  >
                    <FormControlLabel
                      value="w"
                      control={<Radio />}
                      label="여자"
                    />
                    <FormControlLabel
                      value="m"
                      control={<Radio />}
                      label="남자"
                    />
                  </Field>
                  <FormHelperText>
                    <ErrorMessage name="gender" />
                  </FormHelperText>
                </FormControl>
              </div>
              <br />
              {/* 개인정보 유효기간 */}
              <div>
                <FormControl component="fieldset" style={marginTop}>
                  <FormLabel component="legend">개인정보 유효기간</FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-label="expire"
                    name="expire"
                    style={{ display: 'initial' }}
                  >
                    <FormControlLabel
                      value="1year"
                      control={<Radio />}
                      label="1년"
                    />
                    <FormControlLabel
                      value="3year"
                      control={<Radio />}
                      label="3년"
                    />
                    <FormControlLabel
                      value="userWithdrawal"
                      control={<Radio />}
                      label="회원탈퇴시"
                    />
                  </Field>
                  <FormHelperText>
                    <ErrorMessage name="expire" />
                  </FormHelperText>
                </FormControl>
              </div>
              {/* 약관동의 */}
              {/* <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions."
              /> */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? 'Loading' : '가입하기'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
      <Footer />
    </Grid>
  );
};

export default SignUp;
