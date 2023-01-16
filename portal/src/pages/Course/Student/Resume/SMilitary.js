import React, { useEffect } from 'react'
import MilitaryCom from './ResumeCom/MilitaryCom'

const SMilitary = (props) => {

  useEffect(() => {
  }, [props.item])

  const handleAdd = (newItem) => {
    console.log('handleCareer', newItem)
    // concat : 배열 + 배열 (push는 렌더링이 되지 않는다)
    props.setValue(props.item.concat([{
      title: props.item.title || '',
      army: props.item.army || '',
      sDt: props.item.sDt || '',
      eDt: props.item.eDt || '',
      veteranYn: props.item.veteranYn || '',
    }]))
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>병역</p>
      <div className='sRTitleDiv'>
        <div>구분</div>
        <div>군별</div>
        <div>복무기간</div>
        <div></div>
        <div>복무기간</div>
        <div>보훈대상</div>
      </div>
      {props.item.map((item, idx) => (
        <MilitaryCom item={item} idx={idx} key={idx} setValue={props.setValue} />
      ))}
      <div className='sRBtnDiv'>
        <button className='sRAddBtn' onClick={handleAdd}>추가하기</button>
      </div>
    </div>
  )
}

export default SMilitary