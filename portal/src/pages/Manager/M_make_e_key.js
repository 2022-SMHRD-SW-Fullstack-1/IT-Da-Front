import axios from 'axios'
import React, { useState, useRef } from 'react'
import "../../css/M_main.css"

const M_make_e_key = () => {

    const enter_nameRef = useRef("");

    const [enter_name, setEnter_name] = useState("")

    const onEnter_name = e => {
        setEnter_name(e.target.value)
    }

    const makeEnterprise = (e) => {
        e.preventDefault();
        axios
            .post("/enterprise/make_enterprise", {
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
        <div className='basic_container container'>
            <p>과정생성</p>
            <div className='course_make_container_inner content'>
                <div className='container_inner_left'>
                    <p>기업명</p>
                </div>
                <div className='container_inner_right'>
                    <input type="text" value={enter_name} onChange={onEnter_name} ref={enter_nameRef} />
                </div>
            </div>
            <div className='manager_button'>
                <button onClick={makeEnterprise}>기업key 생성하기</button>
            </div>
        </div>
    )
}

export default M_make_e_key