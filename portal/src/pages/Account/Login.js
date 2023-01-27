import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const onClickRegister = () => {
    navigate('/register');
  };

  const [tab, setTab] = useState(true);

  const inputId = useRef('');
  const [id, setId] = useState('');
  const onIdChange = (e) => {
    setId(e.target.value);
  };

  const inputPw = useRef('');
  const [pw, setPw] = useState('');
  const onPwChange = (e) => {
    setPw(e.target.value);
  };

  const inputKey = useRef('');
  const [key, setKey] = useState('');
  const onKeyChange = (e) => {
    setKey(e.target.value);
  };

  const onMLoginClick = () => {
    console.log(id);
    console.log(pw);

    axios
      .post('/member/login', { id: id, pw: pw })
      .then((res) => {
        console.log(res.data);

        if (res.data.mb_job == 's') {
          window.sessionStorage.setItem('loginId', res.data.mb_id);
          window.sessionStorage.setItem('role', 's');
          window.sessionStorage.setItem('userName', res.data.mb_name);
          window.sessionStorage.setItem('course_key', res.data.course_key);
          window.location.replace('/');
        } else if (res.data.mb_job == 't') {
          window.sessionStorage.setItem('loginId', res.data.mb_id);
          window.sessionStorage.setItem('role', 't');
          window.sessionStorage.setItem('userName', res.data.mb_name);
          window.sessionStorage.setItem('course_key', res.data.course_key);
          window.location.replace('/');
        } else if (res.data.mb_job == 'a') {
          window.sessionStorage.setItem('loginId', res.data.mb_id);
          window.sessionStorage.setItem('role', 'a');
          window.sessionStorage.setItem('userName', res.data.mb_name);
          window.sessionStorage.setItem('course_key', '52D8EECC');
          window.location.replace('/');
        } else alert('일치하는 회원정보가 없습니다');
      })
      .catch((e) => console.log(e));
  };

  const onELoginClick = () => {
    console.log(key);
    window.sessionStorage.setItem('role', 'e');
    window.sessionStorage.setItem('userName', '유티소프트');
    window.location.replace('/e_main');
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onMLoginClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="loginContainer">
      <div className="topDiv">
        <div className="loginTab">
          <button
            onClick={() => {
              setTab(true);
              setId('');
              setPw('');
            }}
          >
            회원로그인
          </button>
          <button
            onClick={() => {
              setTab(false);
              setKey('');
            }}
          >
            기업로그인
          </button>
        </div>
        {tab ? (
          <div className="memberLogin">
            <input
              ref={inputId}
              onChange={onIdChange}
              value={id}
              type="text"
              placeholder="아이디를 입력해주세요"
            ></input>
            <input
              ref={inputPw}
              onChange={onPwChange}
              value={pw}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onKeyPress={handleOnKeyPress}
            ></input>
            <div>
              <input type="checkbox"></input>
              <span>로그인 유지</span>
              <input type="checkbox"></input>
              <span>아이디 저장</span>
            </div>
            <button onClick={onMLoginClick}>로그인</button>
            <div>
              <span>아이디 찾기</span>|<span>비밀번호 찾기</span>|
              <span className="loginRegisterNav" onClick={onClickRegister}>
                회원가입
              </span>
            </div>
          </div>
        ) : (
          <div className="enterpriseLogin">
            <input
              ref={inputKey}
              onChange={onKeyChange}
              value={key}
              type="text"
              placeholder="키를 입력해주세요"
            ></input>
            <div>
              <input type="checkbox"></input>
              <span>로그인 유지</span>
              <input type="checkbox"></input>
              <span>키 저장</span>
            </div>
            <button onClick={onELoginClick}>로그인</button>
            <span>키 발급 문의</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
