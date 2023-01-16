import React from 'react'

import { useState, useEffect } from "react"
 
const S_CL_main = () => {


  const btnResume = () => {
    console.log('click')

  }
  useEffect(() => {
    console.log('메인 페이지 변화')

  }, []);

  return (
    <div className="T_rMain">
      <div className='coverLetterMain'>
        <div className='sCLTitleDiv'>
          <p className='sCLTitle'>제목</p>
          <div className='sCLContentDiv'>
            내용
          </div>
        </div>
        <div className='sCLTitleDiv'>
          <p className='sCLTitle'>제목</p>
          <div className='sCLContentDiv'>
            내용
          </div>
        </div>
        <div className='sCLTitleDiv'>
          <p className='sCLTitle'>제목</p>
          <div className='sCLContentDiv'>
            내용
          </div>
        </div>
        <div className='sCLTitleDiv'>
          <p className='sCLTitle'>제목</p>
          <div className='sCLContentDiv'>
            내용
          </div>
        </div>
        <div className='sRBtnDiv'>
          <button onClick={btnResume} >저장하기</button>
        </div>
      </div>
    </div>
  );
}
export default S_CL_main