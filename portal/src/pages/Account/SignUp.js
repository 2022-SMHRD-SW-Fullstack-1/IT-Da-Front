import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

const SignUp = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="signUpForm">
      <Header />

      <form>
        <h1>개인회원가입</h1>

        <div>
          <label>약관동의</label>
          <div>
            <div>
              <input
                type="checkbox"
                id="all-check"
                checked={allCheck}
                onChange={allBtnEvent}
              />
              <label htmlFor="all-check">전체동의</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="check1"
                checked={ageCheck}
                onChange={ageBtnEvent}
              />
              <label htmlFor="check1">
                만 14세 이상입니다 <span>(필수)</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="check2"
                checked={useCheck}
                onChange={useBtnEvent}
              />
              <label htmlFor="check2">
                이용약관 <span>(필수)</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="check3"
                checked={marketingCheck}
                onChange={marketingBtnEvent}
              />
              <label htmlFor="check3">
                마케팅 동의 <span>(선택)</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <input
            className="signUpId"
            type="text"
            placeholder="아이디[4~15자 영문,숫자]"
          ></input>
          <button className="signUpDc">중복확인</button>
        </div>
        <div>
          <input
            className="signUpPw"
            type="password"
            placeholder="비밀번호[8자 이상 영문,숫자]"
          ></input>
        </div>
        <div>
          <input
            className="signUpPwCk"
            type="password"
            placeholder="비밀번호를 재입력해주세요"
          ></input>
        </div>
        <div>
          <input
            className="signUpName"
            type="text"
            placeholder="이름을 입력해주세요"
          ></input>
        </div>
        <div>
          <input
            className="signUpBirth"
            type="text"
            placeholder="생년월일 8자리 입력. 성별[선택]"
          ></input>
          <input type="radio" name="gender" value="male"></input>남
          <input type="radio" name="gender" value="female"></input>여
        </div>
        <div>
          <input
            className="signUpEmail"
            type="text"
            placeholder="이메일을 입력해주세요"
          ></input>
        </div>
        <div>
          <input
            className="signUpPhone"
            type="text"
            placeholder="'-'없이 입력하세요"
          ></input>
          <button>인증번호전송</button>
        </div>
        <div>
          <input
            className="signUpPhoneCk"
            type="text"
            placeholder="인증번호"
          ></input>
          <button>확인</button>
        </div>
        <h3>개인정보 유효기간 선택</h3>
        <div>
          <input type="radio" name="delete" value="1year"></input>1년
          <input type="radio" name="delete" value="3year"></input>3년
          <input type="radio" name="delete" value="userQuit"></input>회원탈퇴시
        </div>
        <button className="signUpButton" type="submit" onClick={goToMain}>
          가입하기
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
