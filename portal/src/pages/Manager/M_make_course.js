import "../../css/M_main.css"
import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const M_make_course = () => {

    const navigate = useNavigate();

    const course_subjectRef = useRef("");
    const course_nameRef = useRef("");
    const course_campusRef = useRef("");
    const course_s_dtRef = useRef("");
    const course_e_dtRef = useRef("");
    const course_teacherRef = useRef("");
    const course_limitRef = useRef("");

    const [course_subject, setCourse_subject] = useState("")
    const [course_name, setCourse_name] = useState("")
    const [course_campus, setCourse_campus] = useState("")
    const [course_s_dt, setCourse_s_dt] = useState("")
    const [course_e_dt, setCourse_e_dt] = useState("")
    const [course_teacher, setCourse_teacher] = useState("")
    const [course_limit, setCourse_limit] = useState("")

    const onCourse_subject = e => {
        setCourse_subject(e.target.value)
    }
    const onCourse_name = e => {
        setCourse_name(e.target.value)
    }
    const onCourse_campus = e => {
        setCourse_campus(e.target.value)
    }
    const onCourse_s_dt = e => {
        setCourse_s_dt(e.target.value)
    }
    const onCourse_e_dt = e => {
        setCourse_e_dt(e.target.value)
    }
    const onCourse_teacher = e => {
        setCourse_teacher(e.target.value)
    }
    const onCourse_limit = e => {
        setCourse_limit(e.target.value)
    }

    // 과정 생성하기
    const make_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/course/make_course", {
                course_subject: course_subject,
                course_name: course_name,
                course_campus: course_campus,
                course_s_dt: course_s_dt,
                course_e_dt: course_e_dt,
                course_teacher: course_teacher,
                course_limit: course_limit
            })
            .then(function (res) {
                alert("과정생성 완료")
                navigate('/make_teacher', { state: { course_teacher: course_teacher, course_s_dt: course_s_dt} })
            })
            .catch(function (err) {
                console.log("error")
            })
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    // const SubjectList = () => (
    //     <Select options={options} />)


    return (
        <div className='basic_container container'>
            <p>과정생성</p>
            <div className='course_make_container_inner content'>
                <div className='container_inner_left'>
                    <p>과정주제</p>
                    <p>과정명</p>
                    <p>캠퍼스</p>
                    <p>과정시작날짜</p>
                    <p>과정정료날짜</p>
                    <p>담임명</p>
                    <p>총원</p>
                </div>
                <div className='container_inner_right'>
                    {/* <SubjectList value={course_subject} onChange={onCourse_subject} forwardRef={course_subjectRef} /> */}
                    <input type="text" value={course_subject} onChange={onCourse_subject} ref={course_subjectRef} />
                    <input type="text" value={course_name} onChange={onCourse_name} ref={course_nameRef} />
                    <input type="text" value={course_campus} onChange={onCourse_campus} ref={course_campusRef} />
                    <input type="text" value={course_s_dt} onChange={onCourse_s_dt} ref={course_s_dtRef} />
                    <input type="text" value={course_e_dt} onChange={onCourse_e_dt} ref={course_e_dtRef} />
                    <input type="text" value={course_teacher} onChange={onCourse_teacher} ref={course_teacherRef} />
                    <input type="text" value={course_limit} onChange={onCourse_limit} ref={course_limitRef} />
                </div>
            </div>
            <div className='manager_button'>
                <button onClick={make_course_submit}>과정 생성하기</button>
            </div>
        </div>
    )
}

export default M_make_course