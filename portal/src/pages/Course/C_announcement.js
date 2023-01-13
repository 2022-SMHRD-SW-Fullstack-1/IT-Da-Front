import React from 'react'
import { useNavigate } from 'react-router-dom'

import '../../css/Course.css'

const C_announcement = () => {

  const navigate = useNavigate()
  const goToDetail = () => {
    navigate('./detail')
  }


  //임시 데이터
  const tempData = [{title: "신입생 여러분들 환영합니다", date: "2023-01-01"}, {title: "깃허브 회원가입 관련 공지", date: "2023-01-02"}, {title: "취업박람회 공지", date: "2023-01-07"}, {title: "내일은 늦지 않게 와주세요", date: "2023-01-15"}]

  const bodyContent = tempData.reverse().map((item, idx)=>(
            <tr onClick={goToDetail} key={idx}>
              <td>{tempData.length - idx}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
            </tr>))

  return (
    <div className='container'>
      <p>공지사항</p>
      <div className='content'>
        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>제목</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {bodyContent}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default C_announcement