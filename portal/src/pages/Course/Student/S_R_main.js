import SCareer from "./Resume/SCareer"
import SCertification from "./Resume/SCertification"
import SGraduation from "./Resume/SGraduation"
import SMilitary from "./Resume/SMilitary"
import SPrize from "./Resume/SPrize"
import SResume from "./Resume/SResume"
import SWishArea from "./Resume/SWishArea"
import SWishSalary from "./Resume/SWishSalary"
import "../../../css/SRMainComponent.css"
import { useState, useEffect } from "react"
import axios from "axios"

function S_R_main() {

  const [resume, setResume] = useState({
    name: '',
    gender: '',
    birthday: '',
    phone: '',
    email: '',
    addr: '',
    skills: '',
    //
    wish_area1: '전체',
    wish_area2: '전체',
    wish_area3: '전체',
    //
    wish_salary: '내규에 따름',
    //
    wish_field: '',
    major: '',
  })
  //추가버튼있음
  const [graduation, setGraduation] = useState([{
    gradSchool: '',
    schoolType: '',
    gradDt: '',
    gradType: '',
    gradScore: '',
  }])
  //추가버튼있음
  const [career, setCareer] = useState([
    {
      organization: '',
      position: '',
      s_dt: '',
      e_dt: '',
      activity: '',
    }
  ])
  //추가버튼있음
  const [certification, setCertification] = useState([{
    name: '',
    dt: '',
    org: '',
  }])
  //추가버튼있음
  const [prize, setPrize] = useState([{
    name: '',
    org: '',
    dt: '',
  }])
  //추가버튼있음
  const [military, setMilitary] = useState([{
    title: '',
    army: '',
    sDt: '',
    eDt: '',
    veteranYn: '',
  }])

  /**저장하기 버튼 */
  const btnResume = () => {
    console.log('click')
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
      .then(res => console.log(res))
      .catch(e => console.error(e))
    // console.log(resume)
    // console.log(graduation)
    // console.log(career)
    // console.log(certification)
    // console.log(prize)
    // console.log(military)
  }

  // 하위 컴포넌트가 실행되고 메인 컨포넌트가 실행된다.
  // 가데이터가 있는 지금은 문제가 없으나 db값을 받아오면 문제가 생길 수 있음
  useEffect(() => {
    console.log('메인 페이지 변화')
    axios
      .get('/resume/all', {
        // params: { id: sessionStorage.getItem("loginId") }
      })
      .then(res => {
        console.log(res.data)
        // setResume(res.data[0])
        // setGraduation(res.data[1])
        // // console.log(res.data[1])
        // setCareer(res.data[2])
        // // console.log(res.data[2])
        // setCertification(res.data[3])
        // // console.log(res.data[3])
        // setPrize(res.data[4])
        // // console.log(res.data[4])
        // setMilitary(res.data[5])
        // console.log(res.data[5])
      }
      )
      .catch(e =>
        console.error(e))
      // .get('/resume/one', {
      //   params: { id: sessionStorage.getItem("loginId") }
      // })
      // .then(res => {
      //   console.log(res.data)
      //   setResume(res.data[0])
      //   setGraduation(res.data[1])
      //   // console.log(res.data[1])
      //   setCareer(res.data[2])
      //   // console.log(res.data[2])
      //   setCertification(res.data[3])
      //   // console.log(res.data[3])
      //   setPrize(res.data[4])
      //   // console.log(res.data[4])
      //   setMilitary(res.data[5])
      //   // console.log(res.data[5])
      // }
      // )
      // .catch(e =>
      //   console.error(e))
  }, []);


  return (
    <div className="T_rMain">
      <div className='resumeMain'>
        <div>
          <SResume item={resume} setValue={setResume} />
          <SWishArea item={resume} setValue={setResume} />
        </div>
        <div>
          <SWishSalary item={resume} setValue={setResume} />
        </div>
        {/* 아래의 컴포넌트는 추가 버튼이 있어서 버튼을 누를 때마다 map으로 추가해야함 */}
        <div>
          <SGraduation item={graduation} setValue={setGraduation} />
          <SCareer item={career} setValue={setCareer} />
        </div>
        <div>
          <SCertification item={certification} setValue={setCertification} />
          <SPrize item={prize} setValue={setPrize} />
          <SMilitary item={military} setValue={setMilitary} />
          <div className='sRBtnDiv'>
            <button onClick={btnResume} >저장하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S_R_main;
