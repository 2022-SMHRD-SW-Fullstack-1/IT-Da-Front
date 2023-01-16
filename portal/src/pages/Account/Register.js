import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import '../../css/Register.css'
import Agreement from './Agreement'

const Register = () => {

   const navigate = useNavigate()

   const [id, setId] = useState('');
   const onIdChange = e => {
      setId(e.target.value)
   };

   const [pw, setPw] = useState('');
   const onPwChange = e => {
      setPw(e.target.value)
   };

   const [pwCheck, setPwCheck] = useState('');
   const onPwCheckChange = e => {
      setPwCheck(e.target.value)
   };
   
   const [name, setName] = useState('');
   const onNameChange = e => {
      setName(e.target.value)
   };

   const [bd, setBD] = useState('');
   const onBDChange = e => {
      setBD(e.target.value)
   };

   const [gender, setGender] = useState('m')
   const handleGender = (e) => {
      setGender(e.target.value)
   }

   const [tel, setTel] = useState('');
   const onTelChange = e => {
      setTel(e.target.value)
   };

   const [address, setAddress] = useState('')
   const onAddressChange = e => {
      setAddress(e.target.value)
   }

   const [expire, setExpire] = useState('leave')
   const onExpireChange = e => {
      setExpire(e.target.value)
   }

   const onClickRegister = () => {
      // console.log(id)
      // console.log(pw)
      // console.log(pwCheck)
      // console.log(name)
      // console.log(bd)
      // console.log(gender)
      // console.log(tel)
      // console.log(address)
      // console.log(expire)

      //back으로 회원가입 데이터 전송
      axios
         .post("/member/register", { id: id, pw: pw, name: name, bd: bd, gender: gender, tel: tel, address: address, expire: expire})
         .then(res => console.log(res))
         .catch(e => console.log(e));
         navigate('/')
   }

   return (
      <div className='registerCntainer'>
         <div>
            <p>개인회원가입</p>
            <Agreement />

            <div>
               <span>아이디 (4~15자 영문,숫자)</span>
               <input onChange={onIdChange} value={id} type='email'></input>
            </div>
            <span>아이디를 입력하세요.</span>

            <div>
               <span>비밀번호 8-15자의 영문/숫자 또는 특수문자 조합</span>
               <input onChange={onPwChange} value={pw} type='password'></input>
            </div>
            <span>비밀번호를 입력하세요.</span>

            <div>
               <span>비밀번호 재입력</span>
               <input onChange={onPwCheckChange} value={pwCheck} type='password'></input>
            </div>
            <span>비밀번호를 다시 한번 입력하세요.</span>

            <div>
               <span>이름</span>
               <input onChange={onNameChange} value={name} type='text'></input>
            </div>
            <span>이름을 입력하세요.</span>

            <div>
               <span>생년월일</span>
               <input onChange={onBDChange} value={bd} type='date'></input>
               <span>성별</span>
               <div>
                  <input type='radio' name='gender' value='m' onChange={handleGender} checked={gender==='m'}></input> 남
                  <input type='radio' name='gender' value='f' onChange={handleGender} checked={gender==='f'}></input> 여
               </div>
            </div>
            <span>생년월일을 입력하세요.</span>

            <div>
               <span>휴대폰 ('-'없이 입력하세요.)</span>
               <input onChange={onTelChange} value={tel} type='tel'></input>
            </div>
            <span>휴대폰 번호를 입력하세요.</span>

            <div>
               <span>주소</span>
               <input onChange={onAddressChange} value={address} type='text'></input>
            </div>
            <span>주소를 입력하세요.</span>

            <br /><br />
            <h6>개인정보 유효기간 선택</h6>
            <div id='expire'>
               <div>
                  <input type='radio' name='expire_dt' value='one' onChange={onExpireChange} checked={expire==='one'} id='1year'></input>
                  <label htmlFor='1year'>1년</label>
               </div>
               <div>
                  <input type='radio' name='expire_dt' value='three' onChange={onExpireChange} checked={expire==='three'} id='3year'></input>
                  <label htmlFor='3year'>3년</label>
               </div>
               <div>
                  <input type='radio' name='expire_dt' value='leave' onChange={onExpireChange} checked={expire==='leave'} id='leave'></input>
                  <label htmlFor='leave'>회원탈퇴시</label>
               </div>
            </div>

            <button onClick={onClickRegister}>가입하기</button>

         </div>
      </div>
   )
}

export default Register