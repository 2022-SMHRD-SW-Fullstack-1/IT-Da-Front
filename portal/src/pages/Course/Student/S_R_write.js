import axios from "axios"
import { useEffect, useRef, useState } from "react"
import "../../../css/Resume.css"
import "../../../css/print.css"
import CareerWrite from "./Resume/ResumeCom/CareerWrite"
import CertificationWrite from "./Resume/ResumeCom/CertificationWrite"
import GraduationWrite from "./Resume/ResumeCom/GraduationWrite"
import MilitaryWrite from "./Resume/ResumeCom/MilitaryWrite"
import PrizeWrite from "./Resume/ResumeCom/PrizeWrite"
import ResumeWrite from "./Resume/ResumeCom/ResumeWrite"
import { useNavigate } from "react-router-dom"

function S_R_write() {

  const [resume, setResume] = useState({
    name: '',
    gender: '',
    birthday: '',
    major: '',
    phone: '',
    email: '',
    addr: '',
    skills: '',
    wish_field: '',
    wish_salary: '',
    wish_area1: '',
    wish_area2: '',
    wish_area3: '',
    simple_comment: '',
    photo: '',
    project1: '1',
    project2: '2',
  })
  //추가버튼있음
  const [graduation, setGraduation] = useState([{
    grad_num: '',
    grad_school: '',
    school_type: '',
    grad_dt: '',
    grad_type: '',
    grad_score: '',
  }
  ])
  //추가버튼있음
  const [career, setCareer] = useState([{
    cr_num: '',
    cr_organization: '',
    cr_position: '',
    cr_s_dt: '',
    cr_e_dt: '',
    activity: '',
  }])
  //추가버튼있음
  const [certification, setCertification] = useState([{
    cert_num: '',
    cert_org: '',
    cert_name: '',
    cert_dt: '',
  }])
  //추가버튼있음
  const [prize, setPrize] = useState([{
    prize_num: '',
    prize_org: '',
    prize_name: '',
    prize_dt: '',
  }])
  //추가버튼있음
  const [military, setMilitary] = useState([{
    mili_num: '',
    mili_title: '',
    mili_army: '',
    mili_s_dt: '',
    veteran_yn: '',
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
  }, [resume.photo]);

  const navigate = useNavigate()
  const goToResumeFrame = () => {
    navigate('/resume/frame', 
    {state:{ resume: resume, graduation: graduation, career: career, certification:certification, prize:prize, military:military }})
  }
  return (
    <div className='topDiv_resumePage'>
      <div className='topDiv_resume'>
        <ResumeWrite resume={resume} setResume={setResume} />
        <GraduationWrite graduation={graduation} setGraduation={setGraduation} />
        <CareerWrite career={career} setCareer={setCareer} />
        <CertificationWrite certification={certification} setCertification={setCertification} />
        <PrizeWrite prize={prize} setPrize={setPrize} />
        <MilitaryWrite military={military} setMilitary={setMilitary} />
      </div>
      <button className="blueBtn" onClick={goToResumeFrame}>출력페이지</button>
      <p></p>
    </div>
  );
}

export default S_R_write;
