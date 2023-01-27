import axios from 'axios'
import React, { useEffect, useState } from 'react'

import '../css/StdInfoList.css'
import data from '../asset/json/data.json'
import MyResponsiveSunburst from './MyResponsiveSunburst'

const StdInfoList = () => {

   const [tableTitle, setTableTitle] = useState('')

   useEffect(()=>{
      axios
      .get('/announcement/getCourseInfo', { params: { key: window.sessionStorage.getItem("course_key") } })
      .then((res) => setTableTitle(res.data))
      .catch((e) => console.log(e));
   },[])

   const divisionData = [{ item: "희망", explain: "취업 또는 창업을 희망하는자" },
   { item: "재직", explain: "입소시 재직자, 자영업영세업자 등 근로자" },
   { item: "취업", explain: "취업완료 및 창업자(본인명의 사업자등록 발급일)" },
   { item: "자력", explain: "스스로 취업한 자" },
   { item: "제외", explain: "모수 제외(증빙 처리 후 적용) : 군입대, 입원, 진학 등" },
   { item: "기타", explain: "공채, 불가, 연락두절" },
   { item: "중탈", explain: "중도탈락자(월/일)" },]

   const student = [{name: "김춘배", tel: "01035468945", gender: "남", age: "28", school: "조선대학교", major: "정보통신전공", certification: "SQLD", hope_jop: "웹 프론트 개발자", hope_city: "서울 경기", example: "모범", division: "희망", special: "수도권희망"},
   {name: "이수지", tel: "01032656465", gender: "여", age: "27", school: "광주대학교", major: "유아교육과", certification: "SQLD", hope_jop: "안드로이드 앱 개발자", hope_city: "광주 서울", example: "", division: "희망", special: "앱 개발 희망"}]

   return (
      <div className='container stdInfoContainer'>
         <div>
            <div style={{width: '25rem', height: '20rem', zIndex: '0'}}><MyResponsiveSunburst data={data}/></div>
            <table>
               <thead>
                  <tr>
                     <th>구분 항목</th>
                     <th>내용 설명</th>
                  </tr>
               </thead>
               <tbody>
                  {divisionData.map((item) => <tr key={item.item}><td>{item.item}</td><td>{item.explain}</td></tr>)}
               </tbody>
            </table>
         </div>
         <div className='content'>
            <p>{tableTitle}</p>
            <table>
               <thead>
                  <tr>
                     <th>No</th>
                     <th>이름</th>
                     <th>휴대전화</th>
                     <th>성별</th>
                     <th>나이</th>
                     <th>학교</th>
                     <th>전공</th>
                     <th>자격증</th>
                     <th>희망직무</th>
                     <th>희망지역</th>
                     <th>모범</th>
                     <th>구분</th>
                     <th>특이사항/채용기업</th>
                  </tr>
               </thead>
               <tbody>
                  {student.map((item, idx)=><tr><td>{idx+1}</td><td>{item.name}</td><td>{item.tel}</td><td>{item.gender}</td><td>{item.age}</td><td>{item.school}</td><td>{item.major}</td><td>{item.certification}</td><td>{item.hope_jop}</td><td>{item.hope_city}</td><td>{item.example}</td><td>{item.division}</td><td>{item.special}</td></tr>)}

               </tbody>
            </table>
         </div>
      </div>
   )
}

export default StdInfoList