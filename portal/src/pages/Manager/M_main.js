import React from 'react'
import "../../css/M_main.css"

const M_main = () => {

    const menuList = [{ title: "과정관리", subtitle: [{ title: "과정생성", url: "/make_course" }, { title: "과정수정 및 삭제", url: "/edit_course" }] },
    { title: "정보공개", subtitle: [{ title: "공개 키 생성(기업용)", url: "/make_e_key" }] }]

    return (
            <div className='basic_container'>
            <div className='head_title'>
                <strong>과정수정</strong>
            </div>
                <div className='course_edit_container_inner'>
                    <div className='edit_course_table'>
                        <table>
                            <thead>
                                <tr className='edit_course_edit_title'>
                                    <th>고유key</th>
                                    <th>과정명</th>
                                    <th>과정시작날짜</th>
                                    <th>과정종료날짜</th>
                                    <th>담임명</th>
                                    <th>총원</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='edit_course_edit_content'>
                                    <td>asdf1234</td>
                                    <td>Full Stack SW융합 실무 부트캠프</td>
                                    <td>2022.08.01</td>
                                    <td>2023.03.13</td>
                                    <td>강예진 연구원</td>
                                    <td>23</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
    )
}

export default M_main