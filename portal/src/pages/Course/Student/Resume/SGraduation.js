import React, { useEffect } from 'react'
import GraduationCom from './ResumeCom/GraduationCom'

const SGraduation = (props) => {

  // const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']

  useEffect(() => {
  }, [props.item])

  const handleAdd = (newItem) => {
    // console.log('handleGraduation', newItem)
    // concat : 배열 + 배열 (push는 렌더링이 되지 않는다)
    props.setValue(props.item.concat([{
      grad_school: props.item.grad_school||'',
      school_type: props.item.school_type||'',
      grad_dt: props.item.grad_dt||'',
      grad_type: props.item.grad_type||'',
      grad_score: props.item.grad_score||'',
    }]))
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>학력</p>
      <div className='sRTitleDiv'>
        <div>학교명</div>
        <div>구분</div>
        <div>기간</div>
        <div>상태</div>
        <div>학점</div>
      </div>
      {props.item.map((item, idx) => (
        <GraduationCom item={item} idx={idx} key={idx} setValue={props.setValue} />
      ))}
      <div className='sRBtnDiv'>
        <button className='sRAddBtn' onClick={handleAdd} >추가하기</button>
      </div>
    </div>
  )
}

export default SGraduation