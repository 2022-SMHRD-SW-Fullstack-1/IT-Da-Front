import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';

import '../../../css/Course.css'
import 'react-quill/dist/quill.snow.css';
import writeBtn from '../../../asset/img/logo_sbl.png'

const C_announcement_write = (props) => {

   const navigate = useNavigate();

   // navigate를 이용해 전달한 값 가져오기
   const { state } = useLocation();

   // input value 가져오기
   const [title, setTitle] = useState('');
   const onTitleChange = e => {
      setTitle(e.target.value)
   };
   const [content, setContet] = useState('');
   
   useEffect(()=>{
      if (state.title == '글 수정') {
         setTitle(state.b_title)
         setContet(state.b_content)
      }
   },[])


   // 글 작성 버튼 누르면 작성된 내용 가져오기
   const clickWirteBtn = () => {
      console.log(title)
      console.log(content)
      if (state.title == '글 수정') {
         axios
         .post('/announcement/editPost', {
            title: title,
            content: content,
            b_num: state.b_num,
         })
         .then((res) => {
            console.log(res)
            navigate('/announcement', { state: { state: title } })
         })
         .catch((e) => console.log(e));
      } else {
         axios
         .post('/announcement/addPost', {
            title: title,
            content: content,
            id: window.sessionStorage.getItem("loginId"),
            key: window.sessionStorage.getItem("course_key"),
         })
         .then((res) => {
            console.log(res)
            navigate('/announcement', { state: { state: title } })
         })
         .catch((e) => console.log(e));
      }
      
   }

   return (
      <div className='container annContainer'>
         <p>공지사항 {state.title}</p>
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