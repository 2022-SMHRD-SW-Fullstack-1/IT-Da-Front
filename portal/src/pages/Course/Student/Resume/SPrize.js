import React, { useEffect } from 'react'
import PrizeCom from './ResumeCom/PrizeCom'

const SPrize = (props) => {

  useEffect(() => {
  }, [props.item])

  const handleAdd = (newItem) => {
    // console.log('handleCareer', newItem)
    // concat : 배열 + 배열 (push는 렌더링이 되지 않는다)
    props.setValue(props.item.concat([{
      prize_org: props.item.prize_org || '',
      prize_name: props.item.prize_name || '',
      prize_dt: props.item.prize_dt || '',
    }]))
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>수상내역</p>
      <div className='sRTitleDiv'>
        <div>기관명</div>
        <div>수상명</div>
        <div>수상일자</div>
      </div>
      {props.item.map((item, idx) => (
        <PrizeCom item={item} idx={idx} key={idx} setValue={props.setValue} />
      ))}
      <div className='sRBtnDiv'>
        <button className='sRAddBtn' onClick={handleAdd}>추가하기</button>
      </div>
    </div>
  )
}

export default SPrize