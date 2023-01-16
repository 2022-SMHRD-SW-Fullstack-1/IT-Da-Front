import React, { useEffect, useState } from 'react'

const GraduationCom = (props) => {

  const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']

  useEffect(() => {
    console.log("graduationCom")
    console.log(props.item)
    console.log(props.item[props.idx])
  }, [props.idx, props.item])

  const [value, setValue] = useState([
    {
      gradSchool: props.item.gradSchool,
      schoolType: props.item.schoolType,
      gradDt: props.item.gradDt,
      gradType: props.item.gradType,
      gradScore: props.item.gradScore,
    },
  ]);

  return (
    <div className='sRContentDiv'>
      <div><input type='text' name='grad_school' onChange={(e) => setValue(props.item.gradSchool = e.target.value)} value={props.item.gradSchool} /></div>
      <div><input type='text' name='school_type' onChange={(e) => setValue(props.item.schoolType = e.target.value)} value={props.item.schoolType} /></div>
      <div><input type='text' name='grad_dt' onChange={(e) => setValue(props.item.gradDt = e.target.value)} value={props.item.gradDt} /></div>
      <div>
        <select name='grad_type' onChange={(e) => setValue(props.item.gradType = e.target.value)} value={props.item.gradType}>
          {gradTypeList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div><input type='text' name='grad_score' onChange={(e) => setValue(props.item.gradScore = e.target.value)} value={props.item.gradScore} /></div>
      <div className='sRBtnDiv'>
        <button className='sRDeleteBtn'>삭제하기</button>
      </div>
    </div>
  )
}

export default GraduationCom