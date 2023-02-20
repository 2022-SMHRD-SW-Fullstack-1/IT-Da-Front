import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import aws from '../../../asset/json/aws.json'
import AWS from 'aws-sdk';
import '../../../css/Portfolio.css'
import GalleryList from './Portfolio/GalleryList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const S_portfolio_detail = ({portfolio_info}) => {
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
    const {state} = useLocation()

    const navigate = useNavigate()
    const goToWrite = () => {
        navigate('/portfolio/write', {state: {
            title: '수정',
            portfolio_num: state.portfolio_num,
            portfolio_title: state.portfolio_title,
            portfolio_period: state.portfolio_period,
            portfolio_etc: state.portfolio_etc,
            portfolio_img1: state.portfolio_img1,
            portfolio_img2: state.portfolio_img2,
            portfolio_img3: state.portfolio_img3,
            portfolio_content: state.portfolio_content,
            portfolio_stack_front: state.portfolio_stack_front,
            portfolio_stack_back: state.portfolio_stack_back,
            portfolio_stack_db: state.portfolio_stack_db,
            portfolio_url: state.portfolio_url,
            portfolio_file: state.portfolio_file,
            
        }})
    }
    const deletePost = () => {
        axios
        .post('/student/portfolio/delete', {
            portfolio_num: state.portfolio_num
        })
        .then((res)=> {
            console.log(res)
            navigate('/portfolio')
            deleteFile(state.portfolio_num,0)
            deleteFile(state.portfolio_num,1)
            deleteFile(state.portfolio_num,2)
            deleteFile(state.portfolio_num,3)
        })
        .catch(e=>console.error(e))
    }

    const deleteFile = (num,idx) => {
        //삭제를 위한 파라미터 설정
        const params = {
          Bucket: S3_BUCKET,
          //업로드라는 폴더 안에 file.name을 넣겠다
          Key: `upload/portfolio/${sessionStorage.getItem("loginId")}/${num}/`+idx
        };
        myBucket.deleteObject(params)
          .send((err) => {
            if (err) console.log(err)
        })
    }

    
    
    const img = [
        (state.portfolio_img1!==undefined)?{id:1, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${sessionStorage.getItem("loginId")}/${state.portfolio_num}/${1}`}:{id:1, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${portfolio_info.mb_id}/${portfolio_info.portfolio_num}/${1}`},
        (state.portfolio_img2!==undefined)?{id:2, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${sessionStorage.getItem("loginId")}/${state.portfolio_num}/${2}`}:{id:2, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${portfolio_info.mb_id}/${portfolio_info.portfolio_num}/${2}`},
        (state.portfolio_img3!==undefined)?{id:3, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${sessionStorage.getItem("loginId")}/${state.portfolio_num}/${3}`}:{id:3, image:`https://smhrd-portal.s3.ap-northeast-2.amazonaws.com/upload/portfolio/${portfolio_info.mb_id}/${portfolio_info.portfolio_num}/${3}`},
    ]
    const [datas, setDatas] = useState(img) //고양이 데이터
    const [currItem, setCurrItem] = useState(datas[0]) //선택한 사진 상태설정
    const onView = (id)=>{ //고유번호인 id를 받아서 해당 고양이 사진을 찾아라
        setCurrItem(datas.find(item => item.id === id)) //배열함수중 해당값만 찾아주는 find함수를 쓴다
        console.log(img)
    }


    return (
        <div>
            <div className='portfolioDiv'>
                <p>{state.portfolio_title||portfolio_info.portfolio_title}</p>
                <div>
                    <div>
                        <p>{state.portfolio_period||portfolio_info.portfolio_period}</p>
                        <p>{state.portfolio_etc||portfolio_info.portfolio_etc}</p>
                    </div>
                    <div>
                    <Container>
                        <Row>
                            <Col lg={12} xl={7}>
                        <div className='imgs'>
                            <GalleryList datas = {datas} onView={onView} currItem = {currItem}/>
                        </div>
                        </Col>
                        <Col lg={12} xl={5}>
                        <table>
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>내용</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_content||portfolio_info.portfolio_content}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>front-ent</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_stack_front||portfolio_info.portfolio_stack_front}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>back-end</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_stack_back||portfolio_info.portfolio_stack_back}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>database</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_stack_db||portfolio_info.portfolio_stack_db}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Github</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_url||portfolio_info.portfolio_url}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>첨부파일</th>
                                </tr>
                                <tr>
                                    <td>{state.portfolio_file||portfolio_info.portfolio_file}</td>
                                </tr>
                            </tbody>
                        </table>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </div>
                </div>
            {window.sessionStorage.getItem("role")==="s" ? <div className="content annViewButton">
                <button onClick={goToWrite}>수정</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={deletePost}>삭제</button>
            </div>:<></>}
            
        </div>
    )
}
export default S_portfolio_detail