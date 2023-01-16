import React, { useEffect, useRef } from 'react'

const SCareer = (props) => {

  const crOrganizationRef = useRef()
  const crPositionRef = useRef()
  const crDtRef = useRef()
  const crActivityRef = useRef()

  useEffect(() => {
    crOrganizationRef.current.value = props.item.organization;
    crPositionRef.current.value = props.item.position;
    crDtRef.current.value = props.item.dt;
    crActivityRef.current.value = props.item.activity;
  }, [props.item])

  const setValue = () => {
    props.setValue({
      organization: crOrganizationRef.current.value,
      position: crPositionRef.current.value,
      dt: crDtRef.current.value,
      activity: crActivityRef.current.value
    })
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
      <div className='sRContentDiv'>
        <div><input type='text' name='cr_organization' onChange={setValue} ref={crOrganizationRef} /></div>
        <div><input type='text' name='cr_position' onChange={setValue} ref={crPositionRef} /></div>
        <div><input type='text' name='cr_dt' onChange={setValue} ref={crDtRef} /></div>
        <div><input type='text' name='cr_activity' onChange={setValue} ref={crActivityRef} /></div>
      </div>
      <div className='sRBtnDiv'>
        <button className='sRAddBtn'>추가하기</button>
      </div>
    </div>
  )
}

export default SCareer