import React, { useEffect, useRef } from 'react'

const SWishSalary = (props) => {

  const wishSalaryRef = useRef()

  useEffect(() => {
    console.log(props.item)
    wishSalaryRef.current.value = props.item.wishSalary
  }, [props.item])

  const setValue = () => {
    props.setValue({
      wishSalary: wishSalaryRef.current.value,
    })
  }
  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망연봉</p>
      <div className='sRContentDiv'>
        <div><input type='text' name='wish_salary' onChange={setValue} ref={wishSalaryRef} /></div>
      </div>
    </div>
  )
}

export default SWishSalary