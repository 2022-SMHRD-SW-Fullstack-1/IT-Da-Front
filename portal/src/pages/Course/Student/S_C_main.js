import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../../css/Course.css'

const S_C_main = () => {
  
  const [company, setCompany] = useState([{
    company_register_date:'',
    company_name:'',
    company_deadline:'',
    company_area:'',
    company_employ:'',
    company_grade:'',
    company_position:'',
    company_advantage:'',
    company_salary:'',
    company_require:'',
    company_etc:'',
  }])
  
    const onClick = () => {
    console.log("click");
  };

  useEffect(() => {
    axios
    .get("/company/search/all")
    .then((res)=>{
        //명령
    })
    .catch((e)=>console.error(e));

  },[])

  return (
    <div className="container">
    <div className="topDiv_resumePage">
      <div className="topDiv_resume">
        <table className="content">
          <thead>
            <tr>
                <th>목차</th>
                <th>등록일</th>
                <th>기업명</th>
                <th>마감일</th>
                <th>지역</th>
                <th>고용형태</th>
                <th>학력</th>
                <th>직무</th>
                <th>우대</th>
                <th>급여</th>
                <th>필수</th>
                <th>지원방법</th>
            </tr>
          </thead>
          <tbody>
            {company.map((company, idx) => (
              <tr key={idx}>
                <td><p>{idx+1}</p></td>
                <td><p>{company.company_register_date}</p></td>
                <td><p>{company.company_name}</p></td>
                <td><p>{company.company_deadline}</p></td>
                <td><p>{company.company_area}</p></td>
                <td><p>{company.company_employ}</p></td>
                <td><p>{company.company_grade}</p></td>
                <td><p>{company.company_position}</p></td>
                <td><p>{company.company_advantage}</p></td>
                <td><p>{company.company_salary}</p></td>
                <td><p>{company.company_require}</p></td>
                <td><p>{company.company_etc}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default S_C_main;
