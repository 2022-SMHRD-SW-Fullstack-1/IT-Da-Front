import React, { useEffect, useRef } from 'react'

const SCertification = (props) => {

  const certOrgRef = useRef()
  const certNameRef = useRef()
  const certDtRef = useRef()

  useEffect(() => {
    certOrgRef.current.value = props.item.org;
    certNameRef.current.value = props.item.name;
    certDtRef.current.value = props.item.dt;
  }, [props.item])

  const setValue = () => {
    props.setValue({
      org: certOrgRef.current.value,
      name: certNameRef.current.value,
      dt: certDtRef.current.value
    })
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>자격증</p>
      <div className='sRTitleDiv'>
        <div>기관명</div>
        <div>자격증명</div>
        <div>발행일</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='cert_org' onChange={setValue} ref={certOrgRef} /></div>
        <div><input type='text' name='cert_name' onChange={setValue} ref={certNameRef} /></div>
        <div><input type='text' name='cert_dt' onChange={setValue} ref={certDtRef} /></div>
      </div>
      <div className='sRBtnDiv'>
        <button className='sRAddBtn'>추가하기</button>
      </div>
    </div>
  )
}

export default SCertification