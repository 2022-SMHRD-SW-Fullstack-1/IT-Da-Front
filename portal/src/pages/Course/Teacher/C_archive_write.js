import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';

import '../../../css/Course.css'
import 'react-quill/dist/quill.snow.css';
import aws from '../../../asset/json/aws.json'
import AWS from 'aws-sdk';
const C_archive_write = () => {

   const navigate = useNavigate();

   // navigate를 이용해 전달한 값 가져오기
   const { state } = useLocation();

   const [title, setTitle] = useState('');
   const onTitleChange = e => {
      setTitle(e.target.value)
   };
   const [content, setContent] = useState('');
   const [b_file, setBFile] = useState('');
   const [selectedFile, setSelectedFile] = useState(null)


   // 화면 로딩시 글 수정과 글 작성인지 구분하여 제목을 띄우기
   useEffect(() => {
      if (state.title == '글 수정') {
         setTitle(state.b_title)
         setContent(state.b_content)
         setBFile(state.b_file)
      }
   }, [])


   // 글 작성 버튼 누르면 작성된 내용 가져오기
   const clickWriteBtn = () => {
      console.log(title)
      console.log(content)
      console.log(b_file)
      if (state.title == '글 수정') {
         axios
            .post('/announcement/editArchive', {
               title: title,
               content: content,
               b_num: state.b_num,
               b_file: b_file,
            })
            .then((res) => {
               console.log(res)
               navigate('/archive', { state: { state: title } })
               selectedFile&&(uploadFile(selectedFile,state.b_num))
            })
            .catch((e) => console.log(e));
      } else {
         axios
            .post('/announcement/addArchive', {
               title: title,
               content: content,
               id: window.sessionStorage.getItem("loginId"),
               key: window.sessionStorage.getItem("course_key"),
               b_file:b_file,
            })
            .then((res) => {
               console.log(res)
               navigate('/archive', { state: { state: title } })
               selectedFile&&(uploadFile(selectedFile,state.b_num))
            })
            .catch((e) => console.log(e));
      } 
   }

   const handleFileInput = (e) => {
      const file = e.target.files[0];
      console.log('파일선택', file)
      setSelectedFile(e.target.files[0]);
      setBFile(e.target.files[0].name)
   }
   const fileInput = useRef();
   const onClickFileInput= () => {
      fileInput.current.click()
    }
    //S3 정보 설정
    //aws iam 엑세스 키,패스워드
    const ACCESS_KEY = aws.ACCESS_KEY;
    const SECRET_ACCESS_KEY = aws.SECRET_ACCESS_KEY;
    //aws S3 지역, 버킷명
    const REGION = aws.REGION;
    const S3_BUCKET = aws.S3_BUCKET;
    
    AWS.config.update({ 
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY
    });
    
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    });
    const uploadFile = (file, num) => {
      //업로드를 위한 파라미터 설정
      const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        //업로드라는 폴더 안에 file.name을 넣겠다
        Key: `upload/board/${sessionStorage.getItem("loginId")}/${num}/${file.name}`
      };
      myBucket.putObject(params)
        .send((err) => {
          if (err) console.log(err)
        })
  }

   return (
      <div className='container annContainer'>
         <p>공유 자료실 {state.title}</p>
         <div className='content annContent'>
            <p>제목</p>
            <input onChange={onTitleChange} value={title} type='text'></input>

            <p>내용</p>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            <button onClick={onClickFileInput}>{'파일첨부'}</button>
            <input type='file' style={{ display: "none" }} name='b_file' onChange={handleFileInput} ref={fileInput} />
            <input name='b_file' value={selectedFile?(selectedFile.name):(b_file)} type='text' readOnly/>
            {/* <img src={files && files}/> */}
            <div className='annWriteButton'>
               <button onClick={clickWriteBtn}>저장하기</button>
            </div>
         </div>
      </div>
   )
}

export default C_archive_write