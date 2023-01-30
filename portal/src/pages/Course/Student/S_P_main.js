import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../../css/Course.css'
const S_P_main = () => {

  const [portfolio, setPortfolio] = useState([])


  const navigate = useNavigate()

  const goToDetail = (e) => {
    navigate('./detail', {state: { num: e.currentTarget.getAttribute('num')}})
  }
  const goToWrite = () => {
    navigate('/portfolio/write', { state: { portfolio: portfolio } })
  }
  //받아온 데이터를 map을 활용해 화면에 뿌리는 코드
  const bodyContent = portfolio.map((item, idx) => (
    <tr key={idx}>
      <td>{portfolio.length - idx}</td>
      <td className='hoverHand' onClick={goToDetail} num={item.portfolio_num}>{item.portfolio_title}</td>
      <td>{item.portfolio_dt}</td>
    </tr>))
    return (
        <div className='container'>
            <p>포트폴리오</p>
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

                    <div className='annWriteButton'>
                        <button onClick={goToWrite}>작성하기</button>
                    </div>
            </div>
        </div>
    )
}

export default S_P_main