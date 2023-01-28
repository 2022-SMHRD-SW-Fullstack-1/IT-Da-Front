import React, { useEffect, useState } from 'react'
import axios from "axios"
import M_course_list from "./M_course_list"

const M_edit_course = (props) => {

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios
            .get("/course/select_all_course")
            .then(function (res) {
                setCourse(res.data)
                console.log(res.data)
            })
            .catch(function (error) {
                console.log("error")
            })
    }, [])

    const courseList =
        course.map((item) => <M_course_list item={item} key={item.course_teacher} />)

    return (
        <div className='container'>
        <p>전체 과정</p>
             <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>과정주제</th>
                                <th>과정명</th>
                                <th>캠퍼스</th>
                                <th>기간</th>
                                <th>담임명</th>
                                <th>총원</th>
                                <th>key</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseList}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default M_edit_course