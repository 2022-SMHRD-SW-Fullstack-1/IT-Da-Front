import React, { useEffect, useState } from 'react'

const SWishSalary = (props) => {

  const [value, setValue] = useState([
    {
        wish_salary: props.item.wish_salary || '',
    },
]);

  useEffect(() => {
  }, [props.item])

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망연봉</p>
      <div className='sRContentDiv'>
        <div><input type='text' name='wish_salary' onChange={(e) => setValue(props.item.wish_salary = e.target.value)} value={props.item.wish_salary || ''} /></div>
      </div>
    </div>
  )
}

export default SWishSalary