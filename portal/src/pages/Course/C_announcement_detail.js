import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../../css/Course.css'

const C_announcement_detail = () => {

   const navigate = useNavigate()
   const goToWrite = () => {
      navigate('./write')
   }

   const axiosTest = () => {
      axios
         .post("/announcement/detail")
         .then(res => console.log(res))
         .catch(e => console.log(e));
   }



   return (
      <div className='container'>
         <p>공지사항</p>
         <div className='content'>
            <div className='annViewTitle'>
               <p>제목</p>
               <p>작성일 2023-01-01</p>
            </div>
            <div className='annViewContent'>
               <p>내용 블라블라~</p>
            </div>
         </div>
         <div className='content annViewButton'>
            <button onClick={goToWrite}>글수정</button>
            <button onClick={axiosTest}>글삭제</button>
         </div>
      </div>
   )
}

export default C_announcement_detail