import AWS from 'aws-sdk';
import axios from 'axios';
import { useState } from 'react';
import aws from '../../asset/json/aws.json'
const UploadBtn = ({ btn_text, selectedFile, resume, setResume }) => {
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
      
    //파일 업로드
    const uploadFile = () => {
        console.log(selectedFile)
        //업로드를 위한 파라미터 설정
        const params = {
          ACL: 'public-read',
          Body: selectedFile,
          Bucket: S3_BUCKET,
          //upload/사용자아이디 폴더 안에 file.name을 넣겠다
          Key: `upload/photo/${sessionStorage.getItem("loginId")}/` + selectedFile.name
        };
        myBucket.putObject(params)
        .send((err)=>{
            if (err){
                console.log(err)
            }
            else {
                axios
                .post("/student/photo/update",{
                    photo:selectedFile.name,
                    id: sessionStorage.getItem("loginId")
                })
                .then(res => {
                  console.log(res)
                  setResume({
                    ...resume,
                    photo: selectedFile.name,
                  });
                })
                .catch(e => console.error(e))
                console.log(selectedFile.name)
            }
        })
    }

    // 렌더와 동시에 실행이 되는 문제 발생 -> 조건문 써서 임시로 차단
    // 파일 삭제
    const deleteFile = () => {
        //삭제를 위한 파라미터 설정
        const params = {
            Bucket: S3_BUCKET,
            //업로드라는 폴더 안에 file.name을 삭제하겠다
            Key: `upload/photo/${sessionStorage.getItem("loginId")}/`+resume.photo
        };
        myBucket.deleteObject(params)
        .send((err) => {
            if (err){
                console.log(err)
            }
            else {
                axios
                .post("/student/photo/delete",{
                    photo:resume.photo,
                    id: sessionStorage.getItem("loginId")
                })
                .then(res => {
                  console.log(res)
                  setResume({
                    ...resume,
                    photo: '',
                  });
                })
                .catch(e => console.error(e))
                console.log(resume.photo)
            }
        })
    }

  return (
    <div className='fileDiv'>
        <button onClick={selectedFile?(uploadFile):null}>{btn_text}</button>
        <button onClick={resume.photo?(deleteFile):null}>삭제</button>
    </div>
  )
}

export default UploadBtn