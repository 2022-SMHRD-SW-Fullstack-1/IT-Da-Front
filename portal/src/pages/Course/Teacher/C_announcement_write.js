import React, { useState, useRef } from 'react'

import '../../../css/Course.css'
import writeBtn from '../../../asset/img/logo_sbl.png'

const C_announcement_write = () => {

   // input value 가져오기
   const inputTitle = useRef('')
   const [title, setTitle] = useState('');
   const onTitleChange = e => {
      setTitle(e.target.value)
   };
   const inputContent = useRef('')
   const [content, setContet] = useState('');
   const onContentChange = e => {
      setContet(e.target.value)
   };

   // 글 작성 버튼 누르면 작성된 내용 가져오기
   const clickWirteBtn = () => {
      console.log(title)
      console.log(content)
   }

   return (
      <div className='container'>
         <p>공지사항</p>
         <div className='content'>
            <div className='annWriteTitle'>
               <p>제목</p>
               <input ref={inputTitle} onChange={onTitleChange} value={title} type='text'></input>
            </div>
            <div className='annWriteContent'>
               <p>내용</p>
               <input ref={inputContent} onChange={onContentChange} value={content} type='text'></input>
            </div>
         </div>
         <div className='annWriteButton'>
            <img onClick={clickWirteBtn} src={writeBtn} />
         </div>
      </div>
   )
}

export default C_announcement_write