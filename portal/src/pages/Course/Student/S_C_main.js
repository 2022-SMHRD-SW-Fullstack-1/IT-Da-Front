import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../../css/Course.css'
import M_company_list from "../../Manager/company/M_company_list";

const S_C_main = () => {
  
  const [company, setCompany] = useState([])

  useEffect(() => {
      axios
          .get("/enterprise/select_company")
          .then(function (res) {
              setCompany(res.data)
          })
          .catch(function (error) {
              console.log("error")
          })
  }, [])  

  const companyList =
      company.map((item) => <M_company_list item={item} key={item.company_name} />)

  return (
      <div className='container'>
          <p>기업 공고</p>
          <div className='content'>
              <table>
                  <thead>
                      <tr>
                          <th>등록일</th>
                          <th>기업명</th>
                          <th>마감일</th>
                          <th>구인정보</th>
                      </tr>
                  </thead>
                  <tbody>
                      {companyList}
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default S_C_main;
