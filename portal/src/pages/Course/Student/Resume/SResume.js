import React, { useEffect } from 'react'

const SResume = (props) => {

  // const [resume, setResume] = useState({
  //   name: '',
  //   gender: '',
  //   age: '',
  //   phone: '',
  //   email: '',
  //   addr: '',
  //   skills: '',
  // })

  //초기값을 입력, 특정 input의 값이 변하면 해당 값 재설정
  useEffect(() => {
  }, [props.item])
  useEffect(() => {
    console.log('초기값이 있는가?')
    console.log()

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
          <div><input type='text' name='name' onChange={(e) => props.setValue(e.target.value)} value={props.item.name} /></div>
          <div><input type='text' name='gender' onChange={(e) => props.setValue(e.target.value)} value={props.item.gender} /></div>
          <div>/</div>
          <div><input type='text' name='age' onChange={(e) => props.setValue(e.target.value)} value={props.item.age} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>연락처</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='phone' onChange={(e) => props.setValue(e.target.value)} value={props.item.phone} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>이메일</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='email' onChange={(e) => props.setValue(e.target.value)} value={props.item.email} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>주소</div>
        <div className='sRContentDiv'>
          <div><input type='text' name='addr' onChange={(e) => props.setValue(e.target.value)} value={props.item.addr} /></div>
        </div>
      </div>
      <div className='sRTitleDiv'>
        <div>기술스택</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='skills' onChange={(e) => props.setValue(e.target.value)} value={props.item.skills} /></div>
      </div>
    </div>
  )
}

export default SResume