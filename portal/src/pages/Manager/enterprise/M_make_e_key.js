import axios from 'axios';
import React, { useState, useRef } from 'react';

const M_make_e_key = () => {
  const enter_nameRef = useRef('');

  const [enter_name, setEnter_name] = useState('');

  const onEnter_name = (e) => {
    setEnter_name(e.target.value);
  };

  const makeEnterprise = (e) => {
    e.preventDefault();
    axios
      .post('/enterprise/make_enterprise', {
        enter_name: enter_name,
      })
      .then(function (res) {
        alert('기업생성 완료');
        window.location.reload();
      })
      .catch(function (err) {
        console.log('error');
      });
  };

  return (
    <div className=" registerContainer basic_container_container">
      <div className="">
        <p>기업 키 생성</p>
        <div className="">
          <span>기업 명</span>
          <input
            placeholder="입력해주세요."
            type="text"
            value={enter_name}
            onChange={onEnter_name}
            ref={enter_nameRef}
          />
        </div>
        <button className="manager_button" onClick={makeEnterprise}>
          기업 키 생성하기
        </button>
      </div>
    </div>
  );
};

export default M_make_e_key;
