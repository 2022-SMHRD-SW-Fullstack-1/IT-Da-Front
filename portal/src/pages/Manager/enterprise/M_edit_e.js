import React, { useEffect, useState } from 'react'
import axios from "axios"
import M_e_list from './M_e_list'


const M_edit_e = (props) => {

    const [enter, setEnter] = useState([])

    useEffect(() => {
        axios.get("/enterprise/select_enterprise")
            .then(function (res) {
                console.log(res.data)
                setEnter(res.data)
            })
            .catch(function (error) {
                console.log("error")
            })
    }, [])

    const enterList =
        enter.map((item) => <M_e_list item={item} key={item.enter_name} />)

    return (
        <div className='container'>
            <p>기업 목록</p>
            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>기업명</th>
                            <th>아이디</th>
                            <th>비밀번호</th>
                            <th>대표</th>
                            <th>연락처</th>
                            <th>주소</th>
                            <th>사업자번호</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {enterList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default M_edit_e