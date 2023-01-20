import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const C_archive = () => {

  const navigate = useNavigate()

  const goToDetail = (e) => {
    navigate('./detail', { state: { num: e.currentTarget.getAttribute('num') } })
  }
  const goToWrite = () => {
    navigate('/archive/write', { state: { title: '글 작성' } })
  }

  const [boardList, setBoardList] = useState([])


  // 데이터 가져오기
  useEffect(() => {
    axios
      .get('/announcement/getArchive', { params: { key: window.sessionStorage.getItem("course_key") } })
      .then((res) => setBoardList(res.data))
      .catch((e) => console.log(e));
  }, [])

  //받아온 데이터를 map을 활용해 화면에 뿌리는 코드
  const bodyContent = boardList.map((item, idx) => (
    <tr key={idx}>
      <td>{boardList.length - idx}</td>
      <td className='hoverHand' onClick={goToDetail} num={item.b_num}>{item.b_title}</td>
      <td>{item.b_dt}</td>
    </tr>))


  return (
    <div className='container'>
      <p>공유 자료실</p>
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
        {window.sessionStorage.getItem("role") === 't' &&
          <div className='annWriteButton'>
            <button onClick={goToWrite}>글 쓰기</button>
          </div>}
      </div>
    </div>
  )
}

export default C_archive