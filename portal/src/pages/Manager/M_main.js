import React, { useEffect, useState } from 'react'
import "../../css/M_main.css"
import axios from 'axios';
import M_course_list from './M_course_list';

const M_main = (props) => {

    const menuList = [{ title: "과정관리", subtitle: [{ title: "과정생성", url: "/make_course" }, { title: "과정수정 및 삭제", url: "/edit_course" }] },
    { title: "정보공개", subtitle: [{ title: "공개 키 생성(기업용)", url: "/make_e_key" }] }]

    const [course, setCourse] = useState([])

    useEffect(() => {
        axios
            .get("/select_all_course")
            .then(function (res) {
                setCourse(res.data)
                console.log(res.data)
            })
            .catch(function (error) {
                console.log("error")
            })
    }, [])

    const courseList =
        course.map((item) => <M_course_list item={item} key={course} />)


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

export default M_main