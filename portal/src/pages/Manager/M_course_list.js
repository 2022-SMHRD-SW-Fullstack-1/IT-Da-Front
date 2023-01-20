import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"

const M_course_list = (props) => {

    const course_subjectRef = useRef("");
    const course_nameRef = useRef("");
    const course_campusRef = useRef("");
    const course_s_dtRef = useRef("");
    const course_e_dtRef = useRef("");
    const course_limitRef = useRef("");

    const [course_subject, setCourse_subject] = useState("")
    const [course_name, setCourse_name] = useState("")
    const [course_campus, setCourse_campus] = useState("")
    const [course_s_dt, setCourse_s_dt] = useState("")
    const [course_e_dt, setCourse_e_dt] = useState("")
    const [course_limit, setCourse_limit] = useState("")

    const [edit_style_po, setEdit_style_po] = useState({ display: "" })
    const [edit_style_op, setEdit_style_op] = useState({ display: "none" })

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

    const onCourse_limit = e => {
        setCourse_limit(e.target.value)
    }

    // 과정수정
    const edit_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/course/edit_course", {
                course_subject: course_subject,
                course_name: course_name,
                course_campus: course_campus,
                course_s_dt: course_s_dt,
                course_e_dt: course_e_dt,
                course_limit: course_limit,
                course_key: props.item.course_key
            }).then(function (res) {
                window.location.reload();
            }).catch(function (err) {
                console.log("실패")
            })
    }

    // 수정 클릭 시
    const edit_e_button = () => {
        setEdit_style_po({ display: "none" })
        setEdit_style_op({ display: "" })
    }

    const edit_e_button_quit = () => {
        setEdit_style_po({ display: "" })
        setEdit_style_op({ display: "none" })
    }

    return (
        <tr>
            <td style={edit_style_po} className='course_subject'>{props.item.course_subject} </td>
            <td style={edit_style_op} className='course_subject'><input type='text' value={course_subject} onChange={onCourse_subject} ref={course_subjectRef} placeholder={props.item.course_subject}></input></td>

            <td style={edit_style_po} className='course_name'>{props.item.course_name}</td>
            <td style={edit_style_op} className='course_name'><input type='text' value={course_name} onChange={onCourse_name} ref={course_nameRef} placeholder={props.item.course_name} ></input></td>

            <td style={edit_style_po} className='course_campus'>{props.item.course_campus}</td>
            <td style={edit_style_op} className='course_campus'><input type='text' value={course_campus} onChange={onCourse_campus} ref={course_campusRef} placeholder={props.item.course_campus} ></input></td>

            <td style={edit_style_po} className='course_period'>{props.item.course_s_dt.substring(0,4)}-{props.item.course_s_dt.substring(4,6)}-{props.item.course_s_dt.substring(6,8)}~<br/>
            {props.item.course_e_dt.substring(0,4)}-{props.item.course_e_dt.substring(4,6)}-{props.item.course_e_dt.substring(6,8)}</td>
            <td style={edit_style_op} className='course_period_edit'><input type='text' value={course_s_dt} onChange={onCourse_s_dt} ref={course_s_dtRef} placeholder={props.item.course_s_dt}></input>~<br/>
            <input type='text' value={course_e_dt} onChange={onCourse_e_dt} ref={course_e_dtRef} placeholder={props.item.course_e_dt} ></input></td>

            <td className='course_teacher'>{props.item.course_teacher}</td>

            <td style={edit_style_po} className='course_limit'>{props.item.course_limit}</td>
            <td style={edit_style_op} className='course_limit'><input type='text' value={course_limit} onChange={onCourse_limit} ref={course_limitRef} placeholder={props.item.course_limit} ></input></td>

            <td className='course_key'>{props.item.course_key}</td>
            <td className='course_button' style={edit_style_po}><div className='content annViewButton'><button onClick={edit_e_button}>수정하기</button></div></td>
            <td className='course_button' style={edit_style_op}><div className='content annViewButton'><button onClick={edit_course_submit}>완료</button><button onClick={edit_e_button_quit}>X</button></div></td>

        </tr>
    )
}

export default M_course_list