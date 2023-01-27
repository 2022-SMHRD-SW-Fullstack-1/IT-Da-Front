import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';

import '../../../css/Course.css'
import 'react-quill/dist/quill.snow.css';

const C_archive_write = () => {

   const navigate = useNavigate();

   // navigate를 이용해 전달한 값 가져오기
   const { state } = useLocation();

   const [title, setTitle] = useState('');
   const onTitleChange = e => {
      setTitle(e.target.value)
   };
   const [content, setContet] = useState('');
   const [files, setFiles] = useState('');
   const onLoadFile = (e) => {
      const file = e.target.files;
      const reader = new FileReader();
      reader.onload = () => (setFiles(reader.result))
      reader.readAsDataURL(file[0])
      console.log(file)
   }
   
   // 화면 로딩시 글 수정과 글 작성인지 구분하여 제목을 띄우기
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
         .post('/announcement/editArchive', {
            title: title,
            content: content,
            b_num: state.b_num,
         })
         .then((res) => {
            console.log(res)
            navigate('/archive', { state: { state: title } })
         })
         .catch((e) => console.log(e));
      } else {
         axios
         .post('/announcement/addArchive', {
            title: title,
            content: content,
            id: window.sessionStorage.getItem("loginId"),
            key: window.sessionStorage.getItem("course_key"),
         })
         .then((res) => {
            console.log(res)
            navigate('/archive', { state: { state: title } })
         })
         .catch((e) => console.log(e));
      }

      const formdata = new FormData();
      formdata.append('uploadImage', files[0]);

      const config = {
         Headers: {
            'content-type': 'multipart/form-data',
         },
      };

      axios.post(`api`, formdata, config)    
   }

   useEffect(()=>{
      preview();
      return () => preview();
   })

   const preview = () => {
      if (!files) return false;

      const imgEL = document.querySelector('.img_box');

      const reader = new FileReader();
      reader.onload = () => (imgEL.getElementsByClassName.backgroundImage = `url(${reader.result})`)
      reader.readAsDataURL(files[0])

   }

   return (
      <div className='container annContainer'>
         <p>공유 자료실 {state.title}</p>
         <div className='content annContent'>
            <p>제목</p>
            <input onChange={onTitleChange} value={title} type='text'></input>

            <p>내용</p>
            <ReactQuill theme="snow" value={content} onChange={setContet} />
            <input type='file' accept='img/*' onChange={onLoadFile} />
            <img src={files && files}/>
            <div className='annWriteButton'>
               <button onClick={clickWirteBtn}>저장하기</button>
            </div>
         </div>
      </div>
   )
}

export default C_archive_write