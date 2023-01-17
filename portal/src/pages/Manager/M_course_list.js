import React, { useState, useEffect } from 'react'
import axios from "axios"

const M_course_list = (props) => {


    // 과정수정
    const edit_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/edit_course", {
            }).then(function (res) {

            })

    }

    const delete_course_submit = (e) => {

    }

    return (
        <tr className='edit_course_edit_content'>
            <td>{props.item.course_subject} </td>
            <td>{props.item.course_name}</td>
            <td>{props.item.course_campus}</td>
            <td>{props.item.course_s_dt}</td>
            <td>{props.item.course_e_dt}</td>
            <td>{props.item.course_teacher}</td>
            <td>{props.item.course_limit}</td>
            <td>{props.item.course_limit}</td>
            <button>수정하기</button>
            <button>삭제하기</button>
        </tr>
    )
}

export default M_course_list