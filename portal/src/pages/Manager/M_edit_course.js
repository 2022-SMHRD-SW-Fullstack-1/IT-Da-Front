import "../../css/M_main.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import M_course_list from "./M_course_list"

const M_edit_course = (props) => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios
            .get("/select_on_course")
            .then(function (res) {
                setCourse(res.data)
                console.log(res.data)
            })
            .catch(function (error) {
                console.log("error")
            })
    }, [])

    const courseList =
        course.map((item) => <M_course_list item={item} />)

    return (
        <div className='basic_container'>
            <div className='head_title'>
                <strong>전체 과정</strong>
            </div>
            <div className='course_edit_container_inner'>
                <div className='edit_course_table'>
                    <table>
                        <thead>
                            <tr className='edit_course_edit_title'>
                                <th>과정주제</th>
                                <th>과정명</th>
                                <th>캠퍼스</th>
                                <th>시작날짜</th>
                                <th>종료날짜</th>
                                <th>담임명</th>
                                <th>총원</th>
                                <th>key</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default M_edit_course