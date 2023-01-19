import React, { useEffect, useState } from 'react'

const SResume = (props) => {

  const [value, setValue] = useState({
    name: props.item.name || '',
    gender: props.item.gender || '',
    birthday: props.item.birthday || '',
    phone: props.item.phone || '',
    email: props.item.email || '',
    addr: props.item.addr || '',
    skills: props.item.skills || '',
  })

  //초기값을 입력, 특정 input의 값이 변하면 해당 값 재설정
  useEffect(() => {
  }, [props.item])
  useEffect(() => {
    console.log('초기값이 있는가?')
    console.log(props.item)

  }, [])
  /** 값이 변하면 부모컴포넌트의 값 변경 */

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>인적사항</p>
      <div className='sRPhotoDiv'>
        <div>사진</div>
        <div className='sRBtnDiv'>
          <div><button>수정</button><button>삭제</button></div>
        </div>
        <div className='sRContentDiv'>
          <div><input type='text' name='name' onChange={(e) => setValue(props.item.name = e.target.value)} value={props.item.name || ''} /></div>
          <div><input type='text' name='gender' onChange={(e) => setValue(props.item.gender = e.target.value)} value={props.item.gender || ''} /></div>
          <div>/</div>
          <div><input type='text' name='birthday' onChange={(e) => setValue(props.item.birthday = e.target.value)} value={props.item.birthday || ''} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>연락처</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='phone' onChange={(e) => setValue(props.item.phone = e.target.value)} value={props.item.phone || ''} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>이메일</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='email' onChange={(e) => setValue(props.item.email = e.target.value)} value={props.item.email || ''} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>주소</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='addr' onChange={(e) => setValue(props.item.addr = e.target.value)} value={props.item.addr || ''} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>기술스택</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='skills' onChange={(e) => setValue(props.item.skills = e.target.value)} value={props.item.skills || ''} /></div>
      </div>
    </div>
  )
}

export default SResume