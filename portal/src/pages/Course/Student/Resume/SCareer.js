import React, { useEffect } from 'react'
import CareerCom from './ResumeCom/CareerCom'

const SCareer = (props) => {

  useEffect(() => {
  }, [props.item])

  const handleAdd = (newItem) => {
    console.log('handleCareer', newItem)
    // concat : 배열 + 배열 (push는 렌더링이 되지 않는다)
    props.setValue(props.item.concat([{
      organization: props.item.organization||'',
      position: props.item.position||'',
      dt: props.item.dt||'',
      activity: props.item.activity||'',
    }]))
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>경력, 교육</p>
      <div className='sRTitleDiv'>
        <div>기관명</div>
        <div>직책</div>
        <div>기간</div>
        <div>직무/활동사항</div>
      </div>
      {props.item.map((item, idx) => (
        <CareerCom item={item} idx={idx} key={idx} setValue={props.setValue} />
      ))}
      <div className='sRBtnDiv'>
        <button className='sRAddBtn' onClick={handleAdd}>추가하기</button>
      </div>
    </div>
  )
}

export default SCareer