import React, { useEffect } from 'react'

const SWishSalary = (props) => {

  useEffect(() => {
  }, [props.item])

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망연봉</p>
      <div className='sRContentDiv'>
        <div><input type='text' name='wish_salary' onChange={(e) => props.setValue(e.target.value)} value={props.item.wishSalary} /></div>
      </div>
    </div>
  )
}

export default SWishSalary