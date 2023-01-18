import React, { useEffect, useState } from 'react'
import axios from "axios"
import M_e_list from './M_e_list'


const M_edit_e = (props) => {

    const [enter, setEnter] = useState([])

    useEffect(() => {
        axios.get("/select_e")
            .then(function (res) {
                console.log(res.data)
                setEnter(res.data)
            })
            .catch(function (error) {
                console.log("error")
            })
    }, [])

    const enterList =
        enter.map((item) => <M_e_list item={item} key={enter} />)

    return (
        <div className='basic_container'>
            <div className='head_title'>
                <strong>기업 정보</strong>
            </div>
            <div className='course_edit_container_inner'>
                <div className='edit_course_table'>
                    <table>
                        <thead>
                            <tr className='edit_course_edit_title'>
                                <th>기업명</th>
                                <th>기업키</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enterList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default M_edit_e