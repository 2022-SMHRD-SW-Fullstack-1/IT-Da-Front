import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

const E_company_list = (props) => {

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
        if (window.confirm("수정하시겠습니까?")) {
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
        } else {
            alert("수정취소");
        }
    }

    // 기업 삭제
    const delete_company_submit = (e) => {
        e.preventDefault();
        if (window.confirm("삭제하시겠습니까?")) {
            axios
                .post("/enterprise/delete_company", {
                    company_name: props.item.company_name,
                }).then(function (res) {
                    alert("삭제완료")
                    window.location.reload();
                }).catch(function (err) {
                    console.log("실패")
                })
        } else {
            alert("삭제취소");
        }
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
        <tr className="company_container">

            <td className='company_register'>{props.item.company_register} </td>

            <td className='company_name'>{props.item.company_name} </td>

            <td style={edit_style_po} className='company_deadline'>{props.item.company_deadline} </td>
            <td style={edit_style_op} className='company_deadline'><input type='text' value={company_deadline} onChange={onCompany_deadline}  placeholder={props.item.company_deadline}></input></td>

            <td className="company_outer">
                <div className="company_inner">
                    <div>지역</div>
                    <div style={edit_style_po} className=''>{props.item.company_area} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_area} onChange={onCompany_area}  placeholder={props.item.company_area}></input></div>
                </div>
                <div className="company_inner">
                    <div>고용형태</div>
                    <div style={edit_style_po} className=''>{props.item.company_employ} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_employ} onChange={onCompany_employ} placeholder={props.item.company_employ}></input></div>
                </div>
                <div className="company_inner">
                    <div>학력</div>
                    <div style={edit_style_po} className=''>{props.item.company_grade} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_grade} onChange={onCompany_grade}placeholder={props.item.company_grade}></input></div>
                </div>
                <div className="company_inner">
                    <div>직무</div>
                    <div style={edit_style_po} className=''>{props.item.company_position} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_position} onChange={onCompany_position}  placeholder={props.item.company_position}></input></div>
                </div>
                <div className="company_inner">
                    <div>자격</div>
                    <div style={edit_style_po} className=''>{props.item.company_qual} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_qual} onChange={onCompany_qual} placeholder={props.item.company_qual}></input></div>
                </div>
                <div className="company_inner">
                    <div>필수요건</div>
                    <div style={edit_style_po} className=''>{props.item.company_essential} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_essential} onChange={onCompany_essential}  placeholder={props.item.company_essential}></input></div>
                </div>
                <div className="company_inner">
                    <div>우대</div>
                    <div style={edit_style_po} className=''>{props.item.company_advantage} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_advantage} onChange={onCompany_advantage} placeholder={props.item.company_advantage}></input></div>
                </div>
                <div className="company_inner">
                    <div>특이사항</div>
                    <div style={edit_style_po} className=''>{props.item.company_etc} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_etc} onChange={onCompany_etc} placeholder={props.item.company_etc}></input></div>
                </div>
                <div className="company_inner">
                    <div>급여</div>
                    <div style={edit_style_po} className=''>{props.item.company_salary} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_salary} onChange={onCompany_salary} placeholder={props.item.company_salary}></input></div>
                </div>
                <div className="company_inner">
                    <div>지원방법</div>
                    <div style={edit_style_po} className=''>{props.item.company_apply} </div>
                    <div style={edit_style_op} className=''><input type='text' value={company_apply} onChange={onCompany_apply}  placeholder={props.item.company_apply}></input></div>
                </div>
            </td>
            <td className='course_button' style={edit_style_po}><div className='content annViewButton'><button onClick={edit_company_button}>수정하기</button><button onClick={delete_company_submit}>삭제하기</button>
            </div></td>
            <td className='course_button' style={edit_style_op}><div className='content annViewButton'><button onClick={edit_company_submit}>수정완료</button><button onClick={edit_e_company_quit}>수정취소</button></div></td>

        </tr>
    )
}

export default E_company_list