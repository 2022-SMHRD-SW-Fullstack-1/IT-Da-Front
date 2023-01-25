import "../../css/M_main.css"
import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const M_company_list = (props) => {

    const company_nameRef = useRef("");
    const company_deadlineRef = useRef("");
    const company_areaRef = useRef("");
    const company_employRef = useRef("");
    const company_gradeRef = useRef("");
    const company_positionRef = useRef("");
    const company_qualRef = useRef("");
    const company_essentialRef = useRef("");
    const company_advantageRef = useRef("");
    const company_etcRef = useRef("");
    const company_salaryRef = useRef("");
    const company_applyRef = useRef("");

    const [company_name, setCompany_name] = useState("")
    const [company_deadline, setCompany_deadline] = useState("")
    const [company_area, setCompany_area] = useState("")
    const [company_employ, setCompany_employ] = useState("")
    const [company_grade, setCompany_grade] = useState("")
    const [company_position, setCompany_position] = useState("")
    const [company_qual, setCompany_qual] = useState("")
    const [company_essential, setCompany_essential] = useState("")
    const [company_advantage, setCompany_advantage] = useState("")
    const [company_etc, setCompany_etc] = useState("")
    const [company_salary, setCompany_salary] = useState("")
    const [company_apply, setCompany_apply] = useState("")


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
    const onCompany_qual = e => {
        setCompany_qual(e.target.value)
    }
    const onCompany_essential = e => {
        setCompany_essential(e.target.value)
    }
    const onCompany_advantage = e => {
        setCompany_advantage(e.target.value)
    }
    const onCompany_etc = e => {
        setCompany_etc(e.target.value)
    }
    const onCompany_salary = e => {
        setCompany_salary(e.target.value)
    }
    const onCompany_apply = e => {
        setCompany_apply(e.target.value)
    }

    const [edit_style_po, setEdit_style_po] = useState({ display: "" })
    const [edit_style_op, setEdit_style_op] = useState({ display: "none" })

    // 과정수정
    const edit_company_submit = (e) => {
        e.preventDefault();
        axios
            .post("/enterprise/edit_company", {
                company_name: props.item.company_name,
                company_deadline: company_deadline,
                company_area: company_area,
                company_employ: company_employ,
                company_grade: company_grade,
                company_position: company_position,
                company_qual: company_qual,
                company_essential: company_essential,
                company_advantage: company_advantage,
                company_etc: company_etc,
                company_salary: company_salary,
                company_apply: company_apply,
            }).then(function (res) {
                alert("수정완료")
                window.location.reload();
            }).catch(function (err) {
                console.log("실패")
            })
    }

    // 과정삭제
    const delete_company_submit = (e) => {
        e.preventDefault();
        axios
            .post("/enterprise/delete_company", {
                company_name: props.item.company_name,
            }).then(function (res) {
                alert("삭제완료")
                window.location.reload();
            }).catch(function (err) {
                console.log("실패")
            })
    }

    // 수정 클릭 시
    const edit_company_button = () => {
        setEdit_style_po({ display: "none" })
        setEdit_style_op({ display: "" })
    }

    const edit_e_company_quit = () => {
        setEdit_style_po({ display: "" })
        setEdit_style_op({ display: "none" })
    }

    return (
        <tr>

            <td className=''>{props.item.company_register_date} </td>

            <td className=''>{props.item.company_name} </td>

            <td style={edit_style_po} className=''>{props.item.company_deadline} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_deadline} onChange={onCompany_deadline} ref={company_deadlineRef} placeholder={props.item.company_deadline}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_area} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_area} onChange={onCompany_area} ref={company_areaRef} placeholder={props.item.company_area}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_employ} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_employ} onChange={onCompany_employ} ref={company_employRef} placeholder={props.item.company_employ}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_grade} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_grade} onChange={onCompany_grade} ref={company_gradeRef} placeholder={props.item.company_grade}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_position} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_position} onChange={onCompany_position} ref={company_positionRef} placeholder={props.item.company_position}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_qual} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_qual} onChange={onCompany_qual} ref={company_qualRef} placeholder={props.item.company_qual}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_essential} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_essential} onChange={onCompany_essential} ref={company_essentialRef} placeholder={props.item.company_essential}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_advantage} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_advantage} onChange={onCompany_advantage} ref={company_advantageRef} placeholder={props.item.company_advantage}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_etc} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_etc} onChange={onCompany_etc} ref={company_etcRef} placeholder={props.item.company_etc}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_salary} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_salary} onChange={onCompany_salary} ref={company_salaryRef} placeholder={props.item.company_salary}></input></td>

            <td style={edit_style_po} className=''>{props.item.company_apply} </td>
            <td style={edit_style_op} className=''><input type='text' value={company_apply} onChange={onCompany_apply} ref={company_applyRef} placeholder={props.item.company_apply}></input></td>



            <td className='course_button' style={edit_style_po}><div className='content annViewButton'><button onClick={edit_company_button}>수정하기</button></div></td>
            <td className='course_button' style={edit_style_po}><div className='content annViewButton'><button onClick={delete_company_submit}>삭제하기</button></div></td>
            <td className='course_button' style={edit_style_op}><div className='content annViewButton'><button onClick={edit_company_submit}>완료</button><button onClick={edit_e_company_quit}>X</button></div></td>

        </tr>
    )
}

export default M_company_list