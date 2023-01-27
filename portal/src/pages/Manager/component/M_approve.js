import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const M_approve = () => {

  const navigate = useNavigate()

  const goToMake = () => {
    navigate('/make_course')
 }
 const goToCourseList = () => {
    navigate('/edit_course')
 }


    return (
        <div className='topDiv'>
          <div className='annHead' style={{ marginTop: '1rem' }}>
            <p>진행중인 과정</p>
            <div>
              <p className='hoverHand' onClick={goToMake}>과정추가</p>
              <p className='hoverHand' onClick={goToCourseList}>전체과정</p>
            </div>
          </div>
          <div className='annBody' style={{ minHeight: '12.6rem' }}>
          </div>
        </div>
      )
}

export default M_approve