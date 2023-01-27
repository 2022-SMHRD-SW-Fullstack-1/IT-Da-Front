import React from 'react'

const M_oncourse = () => {
  return (
    <div className='topDiv'>
    <table className='attTable'>
       <thead>
          <tr>
             <td colSpan={3}>기업 승인</td>
          </tr>
       </thead>
       <tbody>
          <tr>
             <td>출석</td>
             <td>지각</td>
             <td>결석</td>
          </tr>
          <tr className='attNum'>
             <td>23</td>
             <td>1</td>
             <td>0</td>
          </tr>
       </tbody>
    </table>
 </div>
  )
}

export default M_oncourse