import axios from "axios"
import { useEffect, useState } from "react"
// import "../../../css/SRMainComponent.css"
import "../../../css/Resume.css"
import CareerWrite from "./Resume/ResumeCom/CareerWrite"
import CertificationWrite from "./Resume/ResumeCom/CertificationWrite"
import GraduationWrite from "./Resume/ResumeCom/GraduationWrite"
import MilitaryWrite from "./Resume/ResumeCom/MilitaryWrite"
import PrizeWrite from "./Resume/ResumeCom/PrizeWrite"
import ResumeWrite from "./Resume/ResumeCom/ResumeWrite"

function S_R_write() {

  const [resume, setResume] = useState({
    name: '유성용',
    gender: '남',
    birthday: 'age',
    major: '전공',
    phone: '01011112222',
    email: 'email@naver.com',
    addr: '광주광역시 북구 용봉동',
    skills: 'Java, Kotlin',
    wish_field: '지원분야',
    wish_salary: '내규에 따름',
    wish_area1: '전체',
    wish_area2: '전체',
    wish_area3: '전체',
    simple_comment:'',
    photo:'',
    project1:'1',
    project2:'2',
  })
  //추가버튼있음
  const [graduation, setGraduation] = useState([{
    grad_num: '',
    grad_school: '00학교',
    school_type: '대학원',
    grad_dt: '2022.02.25',
    grad_type: '휴학',
    grad_score: '2.7',
  }
])
  //추가버튼있음
  const [career, setCareer] = useState([{
    cr_num: '',
    cr_organization: '스인재',
    cr_position: '대리',
    cr_s_dt: '3년',
    cr_e_dt: '3년',
    activity: '',
  }])
  //추가버튼있음
  const [certification, setCertification] = useState([{
    cert_num: '',
    cert_org: '산업인력공단',
    cert_name: '정보처리기사',
    cert_dt: '20230223',
  }])
  //추가버튼있음
  const [prize, setPrize] = useState([{
    prize_num: '',
    prize_org: '과기부',
    prize_name: '대상',
    prize_dt: '20220202',
  }])
  //추가버튼있음
  const [military, setMilitary] = useState([{
    mili_num:'',
    mili_title: '면제',
    mili_army: '육군',
    mili_s_dt: '2000',
    mili_e_dt: '2000',
    veteran_yn: 'X',
  }])

  // 하위 컴포넌트가 실행되고 메인 컨포넌트가 실행된다.
  // 가데이터가 있는 지금은 문제가 없으나 db값을 받아오면 문제가 생길 수 있음
  useEffect(() => {
    axios
      .get('/student/resume/one', {
        params: { id: sessionStorage.getItem("loginId") }
      })
      .then(res => {
        console.log(res.data)
        setResume(res.data[0])
        setGraduation(res.data[1])
        // console.log(res.data[1])
        setCareer(res.data[2])
        // console.log(res.data[2])
        setCertification(res.data[3])
        // console.log(res.data[3])
        setPrize(res.data[4])
        // console.log(res.data[4])
        setMilitary(res.data[5])
        // console.log(res.data[5])
      }
      )
      .catch(e =>
        console.error(e))
  }, []);

  return (
    <div className='topDiv_resumePage'>
        <div className='topDiv_resume'>
        <ResumeWrite resume={resume} setResume={setResume} />
        <GraduationWrite graduation={graduation} setGraduation = {setGraduation}/>
        <CareerWrite career={career} setCareer={setCareer}/>
        <CertificationWrite certification={certification} setCertification={setCertification}/>
        <PrizeWrite prize={prize} setPrize={setPrize}/>
        <MilitaryWrite military={military} setMilitary={setMilitary}/>
        </div>
    </div>
  );
}

export default S_R_write;
