import "../../css/M_main.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import M_company_list from "./M_company_list"

const M_select_company = (props) => {

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
                            <th>지역</th>
                            <th>고용형태</th>
                            <th>학력</th>
                            <th>직무</th>
                            <th>자격</th>
                            <th>필수요건</th>
                            <th>우대</th>
                            <th>특이사항</th>
                            <th>급여</th>
                            <th>지원방법</th>
                            <th></th>
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

export default M_select_company