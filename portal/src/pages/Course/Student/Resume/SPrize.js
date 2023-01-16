import React, { useEffect, useRef } from 'react'

const SPrize = (props) => {

  const prizeNameRef = useRef()
  const prizeOrgRef = useRef()
  const prizeDtRef = useRef()

  useEffect(() => {
    prizeNameRef.current.value = props.item.name;
    prizeOrgRef.current.value = props.item.org;
    prizeDtRef.current.value = props.item.dt;
  }, [props.item])

  const setValue = () => {
    props.setValue({
      name: prizeNameRef.current.value,
      org: prizeOrgRef.current.value,
      dt: prizeDtRef.current.value
    })
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>수상내역</p>
      <div className='sRTitleDiv'>
        <div>기관명</div>
        <div>수상명</div>
        <div>수상일자</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='prize_org' onChange={setValue} ref={prizeOrgRef} /></div>
        <div><input type='text' name='prize_name' onChange={setValue} ref={prizeNameRef} /></div>
        <div><input type='text' name='prize_dt' onChange={setValue} ref={prizeDtRef} /></div>
      </div>
      <div className='sRBtnDiv'>
        <button className='sRAddBtn'>추가하기</button>
      </div>
    </div>
  )
}

export default SPrize