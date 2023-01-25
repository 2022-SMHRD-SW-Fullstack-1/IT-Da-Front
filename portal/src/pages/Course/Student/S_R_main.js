import SResume from "./Resume/SResume";
import "../../../css/Resume.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function S_R_main() {

  const [resume, setResume] = useState({
    name: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
    addr: "",
    skills: "",
    //
    wish_area1: "전체",
    wish_area2: "전체",
    wish_area3: "전체",
    //
    wish_salary: "내규에 따름",
    //
    wish_field: "",
    major: "",
  });
  //추가버튼있음
  const [graduation, setGraduation] = useState([
    {
      grad_school: "",
      school_type: "",
      grad_dt: "",
      grad_type: "",
      grad_score: "",
    },
  ]);
  //추가버튼있음
  const [career, setCareer] = useState([
    {
      organization: "",
      position: "",
      s_dt: "",
      e_dt: "",
      activity: "",
    },
  ]);
  //추가버튼있음
  const [certification, setCertification] = useState([
    {
      name: "",
      dt: "",
      org: "",
    },
  ]);
  //추가버튼있음
  const [prize, setPrize] = useState([
    {
      name: "",
      org: "",
      dt: "",
    },
  ]);
  //추가버튼있음
  const [military, setMilitary] = useState([
    {
      title: "",
      army: "",
      sDt: "",
      eDt: "",
      veteranYn: "",
    },
  ]);


  useEffect(()=>{
    console.log('수정됨')
  },[certification]);

  const navigate = useNavigate()
  /**저장하기 버튼 */
  const btnResume = () => {
    
    console.log("저장click");
    axios
      .post("/resume/update", {
        resume: resume,
        graduation: graduation,
        career: career,
        certification: certification,
        prize: prize,
        military: military,
        id: sessionStorage.getItem("loginId"),
      })
      .then((res) => console.log('수정?',career,res))
      // .then(navigate('../resume'))
      .catch((e) => console.error(e))

  };

  useEffect(() => {
    console.log("메인 페이지 변화");
    axios
      .get("/resume/one", {
        params: { id: sessionStorage.getItem("loginId") },
      })
      .then((res) => {
        console.log(res.data)
        setResume(res.data[0]);
        setGraduation(res.data[1]);
        console.log("학력 값",res.data[1]);
        setCareer(res.data[2]);
        // console.log(res.data[2])
        setCertification(res.data[3]);
        // console.log(res.data[3])
        setPrize(res.data[4]);
        // console.log(res.data[4])
        setMilitary(res.data[5]);
        // console.log(res.data[5])
      })
      .catch((e) => console.error(e));
  }, []);

  const handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childElementCount> 2 &&
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(e.target.parentElement.parentElement.parentElement.parentElement)
  };

  return (
    <div className="topDiv_resumePage">
    <div className="topDiv_resume">
        <SResume resume={resume} setResume={setResume} />

        <div className="saveDiv">
          <span><button className="saveBtn" onClick={btnResume}>저장하기</button></span>
        </div>
    </div>
    </div>
  );
}

export default S_R_main;
