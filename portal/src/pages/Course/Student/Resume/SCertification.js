import React, { useEffect } from 'react'
import CertificationCom from './ResumeCom/CertificationCom'

const SCertification = (props) => {

  useEffect(() => {
  }, [props.item])

  const handleAdd = (newItem) => {
    console.log('handleCertification', newItem)
    // concat : 배열 + 배열 (push는 렌더링이 되지 않는다)
    props.setValue(props.item.concat([{
      org: props.item.org||'',
      name: props.item.name||'',
      dt: props.item.dt||'',
    }]))
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>자격증</p>
      <div className='sRTitleDiv'>
        <div>기관명</div>
        <div>자격증명</div>
        <div>발행일</div>
      </div>
      {props.item.map((item, idx) => (
        <CertificationCom item={item} idx={idx} key={idx} setValue={props.setValue} />
      ))}
      <div className='sRBtnDiv'>
        <button className='sRAddBtn' onClick={handleAdd}>추가하기</button>
      </div>
    </div>
  )
}

export default SCertification