import React from 'react'
import { Navigate } from 'react-router-dom'
import '../../../css/SMainComponent.css'

const BoardButton = () => {

  const goToBoard = () => {
    Navigate('./board')
  }
  const goToExtend = () => {
    Navigate('./extend')
  }
  return (
    <div className='stuBoardExtendBtnDiv'>
      <span className='stuBoardDiv hoverHand' onClick={goToBoard}>공유 자료실<br />바로가기</span>
      <span className='stuExtendDiv hoverHand' onClick={goToExtend}>강의실 연장 사용<br />신청하기</span>
    </div>
  )
}

export default BoardButton