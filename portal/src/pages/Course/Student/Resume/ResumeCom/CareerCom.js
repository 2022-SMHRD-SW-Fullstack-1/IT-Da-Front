import React, { useEffect, useState } from 'react'

const CareerCom = (props) => {

  useEffect(() => {
    // console.log("careerCom")
    // console.log(props.item)
    // console.log(props.item[props.idx])
  }, [props.idx, props.item])


  const [value, setValue] = useState([
    {
      cr_organization: props.item.cr_organization || '',
      cr_position: props.item.cr_position || '',
      cr_s_dt: props.item.cr_s_dt || '',
      cr_e_dt: props.item.cr_e_dt || '',
      cr_activity: props.item.cr_activity || '',
    },
  ]);

  const handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.childElementCount>4&&
    e.target.parentElement.parentElement.remove()
  }

  return (
    <div className='sRContentDiv'>
      <div><input type='text' name='cr_organization' onChange={(e) => { setValue(props.item.cr_organization = e.target.value) }} value={props.item.cr_organization || ''} /></div>
      <div><input type='text' name='cr_position' onChange={(e) => { setValue(props.item.cr_position = e.target.value) }} value={props.item.cr_position || ''} /></div>
      <div><input type='text' name='cr_s_dt' onChange={(e) => setValue(props.item.cr_s_dt = e.target.value)} value={props.item.cr_s_dt || ''} /></div>
      <div><input type='text' name='cr_e_dt' onChange={(e) => setValue(props.item.cr_e_dt = e.target.value)} value={props.item.cr_e_dt || ''} /></div>
      <div><input type='text' name='cr_activity' onChange={(e) => setValue(props.item.cr_activity = e.target.value)} value={props.item.cr_activity || ''} /></div>
      <div className='sRBtnDiv'>
        <button className='sRDeleteBtn' onClick={handleDelete}>삭제하기</button>
      </div>
    </div>
  )
}

export default CareerCom