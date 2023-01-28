import AWS from 'aws-sdk';
import axios from 'axios';
import { useState } from 'react';

const UploadBtn = ({btn_text,file_name}) => {
// props로 버튼에 넣을 텍스트와 사용자 아이디(mb_id)를 받아야함
    const [selectedFile, setSelectedFile] = useState(null)
    //S3 정보 설정
    //aws iam 엑세스 키,패스워드
    const ACCESS_KEY = 'AKIAYALYMKESYAPVMMBG';
    const SECRET_ACCESS_KEY = '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';
    //aws S3 지역, 버킷명
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'smhrdportal';
    
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY
    });
    
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET},
      region: REGION,
    });

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file)
        //확장자 확인을 위한 변수
        const fileExt = file.name.split('.').pop();
        //jpg만 받겠다
        if(file.type !== 'image/jpeg' || fileExt !=='jpg'){
          alert('jpg 파일만 Upload 가능합니다.');
          return;
        }
        setSelectedFile(e.target.files[0]);
      }
      
    //파일 업로드
    const uploadFile = (file) => {
        console.log(file)
        //업로드를 위한 파라미터 설정
        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          //upload/사용자아이디 폴더 안에 file.name을 넣겠다
          Key: "upload/" + file.name
        };
        myBucket.putObject(params)
        .send((err)=>{
            if (err){
                console.log(err)
            }
            else {
                axios
                .post("/student/photo/update",{
                    photo:file_name,
                    id: sessionStorage.getItem("loginId")
                })
                .then(res => console.log(res))
                .catch(e => console.error(e))
                console.log(file_name)
            }
        })
    }

    // 렌더와 동시에 실행이 되는 문제 발생 -> 조건문 써서 임시로 차단
    // 파일 삭제
    const deleteFile = (file_name) => {
        //삭제를 위한 파라미터 설정
        const params = {
            Bucket: S3_BUCKET,
            //업로드라는 폴더 안에 file.name을 넣겠다
            Key: "upload/"+file_name
        };
        myBucket.deleteObject(params)
        .send((err) => {
            if (err){
                console.log(err)
            }
            else {
                axios
                .post("/student/photo/delete",{
                    photo:file_name,
                    id: sessionStorage.getItem("loginId")
                })
                .then(res => console.log(res))
                .catch(e => console.error(e))
                console.log(file_name)
            }
        })
    }

  return (
    <div className='fileDiv'>
        <input type='file' onChange={handleFileInput}></input>
        <div>
        <button onClick={selectedFile?(uploadFile(selectedFile)):null}>수정</button>
        <button onClick={selectedFile?(deleteFile({file_name})):null}>삭제</button>
        </div>
    </div>
  )
}

export default UploadBtn