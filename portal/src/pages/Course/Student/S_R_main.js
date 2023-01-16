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
    name: '유성용',
    gender: '남',
    age: 'age',
    phone: '01011112222',
    email: 'email@naver.com',
    addr: '광주광역시 북구 용봉동',
    skills: 'Java, Kotlin',
  })

  const [wishArea, setWishArea] = useState({
    wishArea1: '전체',
    wishArea2: '전체',
    wishArea3: '전체',
  })

  const [wishSalary, setWishSalary] = useState({
    wishSalary: '내규에 따름',
  })
  //추가버튼있음
  const [graduation, setGraduation] = useState([{
    gradSchool: '00학교',
    schoolType: '대학원',
    gradDt: '2022.02.25',
    gradType: '휴학',
    gradScore: '2.7/4.5',
  }])
  //추가버튼있음
  const [careers, setCareer] = useState([
    {organization: '스마트인재개발원',
    position: '대리',
    dt: '3년',
    activity: '',},

    {organization: '유티소프트',
    position: '차장',
    dt: '3년',
    activity: '',},
    
  ])
  //추가버튼있음
  const [certification, setCertification] = useState([{
    name: '정보처리기사',
    dt: '20230223',
    org: '산업인력공단',
  }])
  //추가버튼있음
  const [prize, setPrize] = useState([{
    name: '대상',
    org: '과기부',
    dt: '20220202',
  }])
  //추가버튼있음
  const [military, setMilitary] = useState([{
    title: '면제',
    army: '육군',
    sDt: '2000',
    eDt: '2000',
    veteranYn: 'X',
  }])

  /**저장하기 버튼 */
  const btnResume = () => {
    console.log('click')
    axios
      .post("/resume/update")
      .then(res => console.log(res))
      .catch(e => console.error(e))
    console.log(resume)
    console.log(wishArea)
    console.log(wishSalary)
    console.log(graduation)
    console.log(careers)
    console.log(certification)
    console.log(prize)
    console.log(military)
  }

  // 하위 컴포넌트가 실행되고 메인 컨포넌트가 실행된다.
  // 가데이터가 있는 지금은 문제가 없으나 db값을 받아오면 문제가 생길 수 있음
  useEffect(() => {
    console.log('메인 페이지 변화')

  }, []);

  return (
    <div className="T_rMain">
      <div className='resumeMain'>
        <div>
          <SResume item={resume} setValue={setResume} />
          <SWishArea item={wishArea} setValue={setWishArea} />
        </div>
        <div>
          <SWishSalary item={wishSalary} setValue={setWishSalary} />
        </div>
        {/* 아래의 컴포넌트는 추가 버튼이 있어서 버튼을 누를 때마다 map으로 추가해야함 */}
        <div>
          <SGraduation item={graduation} setValue={setGraduation} />
          <SCareer item={careers} setValue={setCareer} />
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
