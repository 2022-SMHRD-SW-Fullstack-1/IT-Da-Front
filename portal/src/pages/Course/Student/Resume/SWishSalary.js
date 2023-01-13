import React, { useEffect, useRef, useState } from 'react'

const SWishSalary = (props) => {
  const [wishSalary, setWishSalary] = useState('');

  const wishSalaryRef = useRef()


  useEffect(() => {
    console.log(props.item)

    wishSalaryRef.current.value = props.item.wishSalary

  }, [props]);

  return (
    <div className='wish_salary'>
      <table>
        <tbody>
          <tr>
            <td>희망연봉</td>
            <td><input type='text' name='wish_salary' onChange={() => setWishSalary(wishSalaryRef.current.value)} ref={wishSalaryRef} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SWishSalary