import React, { useEffect, useRef } from 'react'

const SGraduation = (props) => {

  const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']

  const gradSchoolRef = useRef()
  const schoolTypeRef = useRef()
  const gradDtRef = useRef()
  const gradTypeRef = useRef()
  const gradScoreRef = useRef()

  useEffect(() => {
    gradSchoolRef.current.value = props.item.gradSchool;
    schoolTypeRef.current.value = props.item.schoolType;
    gradDtRef.current.value = props.item.gradDt;
    gradTypeRef.current.value = props.item.gradType;
    gradScoreRef.current.value = props.item.gradScore;
  }, [props.item])

  const setValue = () => {
    props.setValue({
      gradSchool: gradSchoolRef.current.value,
      schoolType: schoolTypeRef.current.value,
      gradDt: gradDtRef.current.value,
      gradType: gradTypeRef.current.value,
      gradScore: gradScoreRef.current.value
    })
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>학력</p>
      <div className='sRTitleDiv'>
        <div>학교명</div>
        <div>구분</div>
        <div>기간</div>
        <div>상태</div>
        <div>학점</div>
      </div>
      <div className='sRContentDiv'>
        <div><input type='text' name='grad_school' onChange={setValue} ref={gradSchoolRef} /></div>
        <div><input type='text' name='school_type' onChange={setValue} ref={schoolTypeRef} /></div>
        <div><input type='text' name='grad_dt' onChange={setValue} ref={gradDtRef} /></div>
        <div>
          <select name='grad_type' onChange={setValue} ref={gradTypeRef}>
            {gradTypeList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div><input type='text' name='grad_score' onChange={setValue} ref={gradScoreRef} /></div>
      </div>
      <div className='sRBtnDiv'>
        <button className='sRAddBtn'>추가하기</button>
      </div>
    </div>
  )
}

export default SGraduation