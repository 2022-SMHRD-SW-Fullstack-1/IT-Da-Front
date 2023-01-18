import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"

const M_course_list = (props) => {

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

    const [edit_style_po, setEdit_style_po] = useState({ display: "block" })
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
    const onCourse_teacher = e => {
        setCourse_teacher(e.target.value)
    }
    const onCourse_limit = e => {
        setCourse_limit(e.target.value)
    }

    // 과정수정
    const edit_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/edit_course", {
                course_subject: course_subject,
                course_name: course_name,
                course_campus: course_campus,
                course_s_dt: course_s_dt,
                course_e_dt: course_e_dt,
                course_teacher: course_teacher,
                course_limit: course_limit,
                course_key: props.item.course_key
            }).then(function (res) {
                console.log(course_subject)
                alert("과정 수정완료")
                window.location.reload()
            }).catch(function (err) {
                console.log("실패")
            })
    }

    // 과정제거
    const delete_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/delete_course", {
                course_key: props.item.course_key
            }).then(function (res) {
                alert("과정 제거완료")
                window.location.reload()
            }).catch(function (err) {
                console.log("실패")
            })
    }

    // 수정 클릭 시
    const edit_e_button = () => {
        setEdit_style_po({ display: "none" })
        setEdit_style_op({ display: "block" })
    }

    const edit_e_button_quit = () => {
        setEdit_style_po({ display: "block" })
        setEdit_style_op({ display: "none" })
    }



    return (
        <tr className='edit_course_edit_content'>
            <td style={edit_style_po}>{props.item.course_subject} </td>
            <td style={edit_style_op}><input type='text' value={course_subject} onChange={onCourse_subject} ref={course_subjectRef} placeholder={props.item.course_subject}></input></td>

            <td style={edit_style_po}>{props.item.course_name}</td>
            <td style={edit_style_op}><input type='text' value={course_name} onChange={onCourse_name} ref={course_nameRef} placeholder={props.item.course_name}></input></td>

            <td style={edit_style_po}>{props.item.course_campus}</td>
            <td style={edit_style_op}><input type='text' value={course_campus} onChange={onCourse_campus} ref={course_campusRef} placeholder={props.item.course_campus}></input></td>

            <td style={edit_style_po}>{props.item.course_s_dt}</td>
            <td style={edit_style_op}><input type='text' value={course_s_dt} onChange={onCourse_s_dt} ref={course_s_dtRef} placeholder={props.item.course_s_dt}></input></td>

            <td style={edit_style_po}>{props.item.course_e_dt}</td>
            <td style={edit_style_op}><input type='text' value={course_e_dt} onChange={onCourse_e_dt} ref={course_e_dtRef} placeholder={props.item.course_e_dt}></input></td>

            <td style={edit_style_po}>{props.item.course_teacher}</td>
            <td style={edit_style_op}><input type='text' value={course_teacher} onChange={onCourse_teacher} ref={course_teacherRef} placeholder={props.item.course_teacher}></input></td>

            <td style={edit_style_po}>{props.item.course_limit}</td>
            <td style={edit_style_op}><input type='text' value={course_limit} onChange={onCourse_limit} ref={course_limitRef} placeholder={props.item.course_limit}></input></td>

            <td style={edit_style_po}>{props.item.course_key}</td>
            <td style={edit_style_po}><button onClick={edit_e_button}>수정하기</button></td>
            <td style={edit_style_op}><button onClick={edit_course_submit}>수정완료</button></td>
            <td style={edit_style_po}><button onClick={delete_course_submit}>삭제하기</button></td>
            <td style={edit_style_op}><button onClick={edit_e_button_quit}>취소하기</button></td>

        </tr>
    )
}

export default M_course_list