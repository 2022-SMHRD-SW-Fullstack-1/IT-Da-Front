import axios from 'axios'
import React, { useState, useRef } from 'react'
import "../../css/M_main.css"

const M_make_e_key = () => {

    const menuList = [{ title: "과정관리", subtitle: [{ title: "과정생성", url: "/make_course" }, { title: "과정수정 및 삭제", url: "/edit_course" }] },
    { title: "정보공개", subtitle: [{ title: "공개 키 생성(기업용)", url: "/make_e_key" }] }]

    const enter_nameRef = useRef("");

    const [enter_name, setEnter_name] = useState("")

    const onEnter_name = e => {
        setEnter_name(e.target.value)
    }

    const makeEnterprise = (e) => {
        e.preventDefault();
        axios
            .post("/make_enterprise", {
                enter_name: enter_name,
            })
            .then(function (res) {
                alert("기업생성 완료")
                window.location.reload();
            })
            .catch(function (err) {
                console.log("error")
            })
    }


    return (
        <div className='basic_container'>
            <div className='head_title'>
                <strong>기업 key생성</strong>
            </div>
            <div className='course_make_container_inner'>
                <div className='container_inner_left'>
                    <p>기업명</p>
                </div>
                <div className='container_inner_right'>
                    <input type="text" value={enter_name} onChange={onEnter_name} ref={enter_nameRef} />
                    <div className='make_course_button'>
                        <button onClick={makeEnterprise}>기업key 생성하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default M_make_e_key