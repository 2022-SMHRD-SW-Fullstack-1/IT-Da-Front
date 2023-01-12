import "../../css/M_make_course.css"
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

const M_make_course = () => {

    const menuList = [{ title: "과정관리", subtitle: [{ title: "과정생성", url: "/make_course" }, { title: "과정수정 및 삭제", url: "/edit_course" }] },
    { title: "정보공개", subtitle: [{ title: "공개 키 생성(기업용)", url: "/make_e_key" }] }]

    const curr_key = useRef();
    const curr_name = useRef();
    const curr_s_dt = useRef();
    const curr_e_dt = useRef();
    const curr_teacher = useRef();
    const curr_limit = useRef();

    const make_course_submit = (e) => {
        e.preventDefault();
        axios
            .post("/itda/make_course", {
                curr_key: curr_key.current_value,
                curr_name: curr_name.current_value,
                curr_s_dt: curr_s_dt.current_value,
                curr_e_dt: curr_e_dt.current_value,
                curr_teacher: curr_teacher.current_value,
                curr_limit: curr_limit.current_value
            })
    }

    return (
            <div className='basic_container'>
            <div className='head_title'>
                <strong>과정생성</strong>
            </div>
                <div className='course_make_container_inner'>
                    <div className='container_inner_left'>
                        <div className='make_course_input'>
                            고유 key
                        </div>
                        <div className='make_course_input'>
                            과정명
                        </div>
                        <div className='make_course_input'>
                            과정시작날짜
                        </div>
                        <div className='make_course_input'>
                            과정정료날짜
                        </div>
                        <div className='make_course_input'>
                            담임명
                        </div>
                        <div className='make_course_input'>
                            총원
                        </div>
                    </div>
                    <div className='container_inner_right'>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_key} />
                        </div>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_name} />
                        </div>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_s_dt} />
                        </div>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_e_dt} />
                        </div>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_teacher} />
                        </div>
                        <div className='make_course_input'>
                            <input type="text" name="make_course" ref={curr_limit} />
                        </div>
                        <button onClick={make_course_submit}>제출</button>
                    </div>
                </div>
            </div>
    )
}

export default M_make_course