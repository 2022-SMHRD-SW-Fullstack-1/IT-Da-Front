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
        enter.map((item) => <M_e_list item={item} key={item.enter_name}/>)

    return (
        <div className='container'>
            <p>진행중인 과정</p>
            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>기업명</th>
                            <th>기업키</th>
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