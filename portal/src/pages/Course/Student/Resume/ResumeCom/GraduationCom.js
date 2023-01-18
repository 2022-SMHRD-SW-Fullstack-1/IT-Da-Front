import React, { useEffect, useState } from 'react'

const GraduationCom = (props) => {

  const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']

  useEffect(() => {
    // console.log("graduationCom")
    // console.log(props.item)
    // console.log(props.item[props.idx])
  }, [props.idx, props.item])

  const [value, setValue] = useState([
    {
      grad_school: props.item.grad_school || '',
      school_type: props.item.school_type || '',
      grad_dt: props.item.grad_dt || '',
      grad_type: props.item.grad_type || '',
      grad_score: props.item.grad_score || '',
    },
  ]);

  const handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.childElementCount>4&&
    e.target.parentElement.parentElement.remove()
  }

  return (
    <div className='sRContentDiv'>
      <div><input type='text' name='grad_school' onChange={(e) => setValue(props.item.grad_school = e.target.value)} value={props.item.grad_school || ''} /></div>
      <div><input type='text' name='school_type' onChange={(e) => setValue(props.item.school_type = e.target.value)} value={props.item.school_type || ''} /></div>
      <div><input type='text' name='grad_dt' onChange={(e) => setValue(props.item.grad_dt = e.target.value)} value={props.item.grad_dt || ''} /></div>
      <div>
        <select name='grad_type' onChange={(e) => setValue(props.item.gradType = e.target.value)} value={props.item.grad_type}>
          {gradTypeList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div><input type='text' name='grad_score' onChange={(e) => setValue(props.item.grad_score = e.target.value)} value={props.item.grad_score || ''} /></div>
      <div className='sRBtnDiv'>
        <button className='sRDeleteBtn' onClick={handleDelete}>삭제하기</button>
      </div>
    </div>
  )
}

export default GraduationCom