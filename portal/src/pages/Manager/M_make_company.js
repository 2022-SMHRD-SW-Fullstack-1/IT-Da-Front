import "../../css/M_main.css"
import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const M_make_company = () => {

    const company_nameRef = useRef("");
    const company_deadlineRef = useRef("");
    const company_areaRef = useRef("");
    const company_employRef = useRef("");
    const company_gradeRef = useRef("");
    const company_positionRef = useRef("");
    const company_advantageRef = useRef("");
    const company_salaryRef = useRef("");
    const company_requireRef = useRef("");
    const company_etcRef = useRef("");

    const [company_name, setCompany_name] = useState("")
    const [company_deadline, setCompany_deadline] = useState("")
    const [company_area, setCompany_area] = useState("")
    const [company_employ, setCompany_employ] = useState("")
    const [company_grade, setCompany_grade] = useState("")
    const [company_position, setCompany_position] = useState("")
    const [company_advantage, setCompany_advantage] = useState("")
    const [company_salary, setCompany_salary] = useState("")
    const [company_require, setCompany_require] = useState("")
    const [company_etc, setCompany_etc] = useState("")


    const onCompany_name = e => {
        setCompany_name(e.target.value)
    }
    const onCompany_deadline = e => {
        setCompany_deadline(e.target.value)
    }
    const onCompany_area = e => {
        setCompany_area(e.target.value)
    }
    const onCompany_employ = e => {
        setCompany_employ(e.target.value)
    }
    const onCompany_grade = e => {
        setCompany_grade(e.target.value)
    }
    const onCompany_position = e => {
        setCompany_position(e.target.value)
    }
    const onCompany_advantage = e => {
        setCompany_advantage(e.target.value)
    }
    const onCompany_salary = e => {
        setCompany_salary(e.target.value)
    }
    const onCompany_require = e => {
        setCompany_require(e.target.value)
    }
    const onCompany_etc = e => {
        setCompany_etc(e.target.value)
    }

    // 과정 생성하기
    const make_company_submit = (e) => {
        e.preventDefault();
        axios
            .post("/enterprise/make_company", {
                company_name: company_name,
                company_deadline: company_deadline,
                company_area: company_area,
                company_employ: company_employ,
                company_grade: company_grade,
                company_position: company_position,
                company_advantage: company_advantage,
                company_salary: company_salary,
                company_require: company_require,
                company_etc: company_etc,
            })
            .then(function (res) {
                alert("기업생성 완료")
                window.location.reload();
            })
            .catch(function (err) {
                console.log("error")
            })
    }

    return (
        <div className='basic_container container'>
            <p>과정생성</p>
            <div className='course_make_container_inner content'>
                <div className='container_inner_left'>
                    <p>기업명</p>
                    <p>마감일</p>
                    <p>지역</p>
                    <p>고용형태</p>
                    <p>학력</p>
                    <p>직무</p>
                    <p>우대</p>
                    <p>급여</p>
                    <p>특이사항</p>
                    <p>지원방법</p>
                </div>
                <div className='container_inner_right'>
                    <input type="text" value={company_name} onChange={onCompany_name} ref={company_nameRef} />
                    <input type="text" value={company_deadline} onChange={onCompany_deadline} ref={company_deadlineRef} />
                    <input type="text" value={company_area} onChange={onCompany_area} ref={company_areaRef} />
                    <input type="text" value={company_employ} onChange={onCompany_employ} ref={company_employRef} />
                    <input type="text" value={company_grade} onChange={onCompany_grade} ref={company_gradeRef} />
                    <input type="text" value={company_position} onChange={onCompany_position} ref={company_positionRef} />
                    <input type="text" value={company_advantage} onChange={onCompany_advantage} ref={company_advantageRef} />
                    <input type="text" value={company_salary} onChange={onCompany_salary} ref={company_salaryRef} />
                    <input type="text" value={company_require} onChange={onCompany_require} ref={company_requireRef} />
                    <input type="text" value={company_etc} onChange={onCompany_etc} ref={company_etcRef} />
                </div>
            </div>
            <div className='manager_button'>
                <button onClick={make_company_submit}>기업 생성하기</button>
            </div>
        </div>
    )
}

export default M_make_company