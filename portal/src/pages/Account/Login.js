import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Login = () => {
  // const onClickLogin = (e) => {
  //   e.preventDefault();
  //   console.log('click login');
  //   console.log('ID : ', inputId);
  //   console.log('PW : ', inputPw);

  //   axios
  //     .post('/api/login', {
  //       user_id: inputId,
  //       user_pw: inputPw,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       console.log('로그인 시 데이터: ', res.data);

  //       console.log('로그인 시 받아오는 데이터: ', res.config.data);
  //       const js = JSON.parse(res.config.data);
  //       console.log(js.user_id);

  //       console.log(res.data);

  //       if (res.data === 'success') {
  //         //alert('로그인에 성공했습니다');
  //         localStorage.setItem('user_id', js.user_id);
  //         setIsLogin(js.user_id);
  //         navigate('/');
  //       } else {
  //         alert('아이디 또는 비밀번호를 확인해주세요');
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
    //회원가입으로 보내준다
  };

  return (
    <div className="loginForm">
      <Header />

      <form>
        <div>
          <input
            className="loginID"
            type="text"
            placeholder="아이디를 입력해주세요"
          ></input>
        </div>
        <div>
          <input
            className="loginPW"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          ></input>
        </div>
        <input className="loginKeep" value="" type="checkbox"></input>로그인
        유지
        <input className="idSave" value="" type="checkbox"></input>아이디 저장
        <div>
          <button type="submit" className="loginButton">
            로그인
          </button>
          <div>
            <label className="loginIdSearch">아이디 찾기</label>
            <label> | </label>
            <label className="loginPwSearch">비밀번호 찾기</label>
            <label> | </label>
            <label className="loginSignUpMoveButton" onClick={goToSignUp}>
              회원가입
            </label>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
