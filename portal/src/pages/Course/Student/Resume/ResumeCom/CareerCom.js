import React, { useEffect, useState } from 'react'

const CareerCom = (props) => {

  useEffect(() => {
    console.log("careerCom")
    console.log(props.item)
    console.log(props.item[props.idx])
  }, [props.idx, props.item])


  const [value, setValue] = useState([
    {
      organization: props.item.organization,
      position: props.item.position,
      dt: props.item.dt,
      activity: props.item.activity,
    },
  ]);

  return (
    <div className='sRContentDiv'>
      <div><input type='text' name='cr_organization' onChange={(e) => { setValue(props.item.organization = e.target.value) }} value={props.item.organization} /></div>
      <div><input type='text' name='cr_position' onChange={(e) => { setValue(props.item.position = e.target.value) }} value={props.item.position} /></div>
      <div><input type='text' name='cr_dt' onChange={(e) => setValue(props.item.dt = e.target.value)} value={props.item.dt} /></div>
      <div><input type='text' name='cr_activity' onChange={(e) => setValue(props.item.activity = e.target.value)} value={props.item.activity} /></div>
      <div className='sRBtnDiv'>
        <button className='sRDeleteBtn'>삭제하기</button>
      </div>
    </div>
  )
}

export default CareerCom