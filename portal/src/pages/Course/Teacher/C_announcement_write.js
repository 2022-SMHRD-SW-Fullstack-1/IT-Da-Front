import React, { useState, useRef } from 'react'
import ReactQuill from 'react-quill';

import '../../../css/Course.css'
import 'react-quill/dist/quill.snow.css';
import writeBtn from '../../../asset/img/logo_sbl.png'

const C_announcement_write = () => {

   // input value 가져오기
   const [title, setTitle] = useState('');
   const onTitleChange = e => {
      setTitle(e.target.value)
   };
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
      <div className='container annContainer'>
         <p>공지사항 글 수정</p>
         <div className='content annContent'>
            <p>제목</p>
            <input onChange={onTitleChange} value={title} type='text'></input>

            <p>내용</p>
            <ReactQuill theme="snow" value={content} onChange={setContet} />
            <div className='annWriteButton'>
               <button onClick={clickWirteBtn}>저장하기</button>
            </div>
         </div>

      </div>
   )
}

export default C_announcement_write