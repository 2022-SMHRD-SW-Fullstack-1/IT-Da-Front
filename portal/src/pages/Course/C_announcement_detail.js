import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../css/Course.css'

const C_announcement_detail = () => {
   
  const navigate = useNavigate()
  const goToWrite = () => {
    navigate('./write')
  }

   return (
      <div className='container'>
         <p>공지사항</p>
         <div className=''>
            <div className='annViewTitle'>
               <p>제목</p>
               <p>작성일 2023-01-01</p>
            </div>
            <div className='annViewContent'>
               <p>내용 블라블라~</p>
            </div>
         </div>
         <div className='annViewButton'>
            <button onClick={goToWrite}>글수정</button>
            <button>글삭제</button>
         </div>
      </div>
   )
}

export default C_announcement_detail