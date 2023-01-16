import React, { useEffect, useRef } from 'react'

const SResume = (props) => {

  const nameRef = useRef()
  const genderRef = useRef()
  const ageRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const addrRef = useRef()
  const skillsRef = useRef()

  //초기값을 입력, 특정 input의 값이 변하면 해당 값 재설정
  useEffect(() => {
    nameRef.current.value = props.item.name;
    genderRef.current.value = props.item.gender;
    ageRef.current.value = props.item.age;
    phoneRef.current.value = props.item.phone;
    emailRef.current.value = props.item.email;
    addrRef.current.value = props.item.addr;
    skillsRef.current.value = props.item.skills;
  }, [props.item])
  /** 값이 변하면 부모컴포넌트의 값 변경 */
  const setValue = () => {
    props.setValue({
      name: nameRef.current.value,
      gender: genderRef.current.value,
      age: ageRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      addr: addrRef.current.value,
      skills: skillsRef.current.value
    })

  }
  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>인적사항</p>
      <div className='sRPhotoDiv'>
        <div>사진</div>
        <div className='sRBtnDiv'>
          <div><button>수정</button><button>삭제</button></div>
        </div>
        <div className='sRContentDiv'>
          <div><input type='text' name='name' onChange={setValue} ref={nameRef} /></div>
          <div><input type='text' name='gender' onChange={setValue} ref={genderRef} /></div>
          <div>/</div>
          <div><input type='text' name='age' onChange={setValue} ref={ageRef} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>연락처</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='phone' onChange={setValue} ref={phoneRef} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>이메일</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='email' onChange={setValue} ref={emailRef} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>주소</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='addr' onChange={setValue} ref={addrRef} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>기술스택</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='skills' onChange={setValue} ref={skillsRef} /></div>
      </div>
    </div>
  )
}

export default SResume